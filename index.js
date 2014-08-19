var path = require('path'),
    express = require('express'),
    bem = require('bem').api,
    staticDir = path.join('desktop.bundles', 'index'),
    pathToStatic = path.resolve(staticDir),
    rebuildsInProgress = 0,
    app = express()
        .use(function(req, res, next) {
            if(process.env.YENV === 'production') return next();

            rebuildsInProgress++;

            bem.make({}, { targets : staticDir + req.url })
                .then(function() {
                    rebuildsInProgress--;
                    rebuildsInProgress || require('bem/lib/level').resetLevelsCache();

                    next();
             });
        })
        .use(express.static(pathToStatic));

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('server listening on http://localhost:' + port + '/');
});
