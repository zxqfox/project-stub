/* global MAKE:false */

// process.env.YENV = 'production';

var PATH = require('path');

require('bem-tools-autoprefixer').extendMake(MAKE);

MAKE.decl('Arch', {

    blocksLevelsRegexp : /^.+?\.blocks/,
    getBundlesLevels : function() {
        return require('glob').sync('{*.bundles,./app/*/views}');
    }

});

MAKE.decl('BundleNode', {

    getTechs : function() {

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'browser.js+bemhtml',
            'roole',
            'css',
            'html'
        ];

    },

    getForkedTechs : function() {
        return this.__base().concat(['browser.js+bemhtml', 'roole']);
    },

    getLevels : function() {
        return [
            'libs/bem-core/common.blocks',
            'libs/bem-core/desktop.blocks',
            'libs/bem-components/common.blocks',
            'libs/bem-components/desktop.blocks',
            'libs/bem-components/mobile.blocks',
            'libs/bem-components/design/common.blocks',
            'libs/bem-components/design/desktop.blocks',
            'common.blocks',
            'desktop.blocks'
        ];
    },

    'create-css-node' : function(tech, bundleNode, magicNode) {
        var source = this.getBundlePath('roole');
        if(this.ctx.arch.hasNode(source)) {
            return this.createAutoprefixerNode(tech, this.ctx.arch.getNode(source), bundleNode, magicNode);
        }
    }

});

MAKE.decl('AutoprefixerNode', {

    getBrowsers : function() {
        return [
            'last 2 versions',
            'ie 10',
            'ff 24',
            'opera 12.16'
        ];
    }

});

// MAKE.decl('BundlesLevelNode', {
//     buildMergedBundle: function() {
//         return true;
//     }
// });
