var FS = require('fs'),
    Vow = require('vow'),
    VM = require('vm'),
    DB = {
        getData: function() {
            // stub-данные
            return {
                page: {
                    title: 'Page title',
                    description: 'Page description'
                },
                gallery: [
                    { id: 1, title: 'gallery1' },
                    { id: 2, title: 'gallery2' },
                    { id: 3, title: 'gallery3' },
                    { id: 4, title: 'gallery4' }
                ]
            };
        }
    };

// получаем данные
var data = DB.getData();

// читаем шаблоны
var bemtreeTemplate = FS.readFileSync('./desktop.bundles/index/index.bemtree.js', 'utf-8'),
    BEMHTML = require('./desktop.bundles/index/_index.bemhtml.js').BEMHTML;

// пробрасываем vow в контекст BEMTREE
var context = VM.createContext({
    Vow: Vow
});

VM.runInContext(bemtreeTemplate, context);
BEMTREE = context.BEMTREE;

BEMTREE.apply({ data: data }).then(function(bemjson) {
    console.log(BEMHTML.apply(bemjson));
});
