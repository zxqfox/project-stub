var PATH = require('path'),
    environ = require('bem-environ'),
    getTechResolver = environ.getTechResolver,

    BEMCORE_TECHS = environ.getLibPath('bem-core', '.bem/techs');

exports.baseLevelPath = require.resolve('./blocks');

exports.getTechs = function() {
    var techs = this.__base();

    // Use techs from bem-core library
    [
        'browser.js+bemhtml', 'html',
        'i18n', 'i18n.html', 'i18n.browser.js', 'i18n.node.js', 'i18n.browser.js+bemhtml'
    ].forEach(getTechResolver(techs, BEMCORE_TECHS));

    return techs;
};

// Create bundles in bemjson.js tech
exports.defaultTechs = ['bemjson.js'];
