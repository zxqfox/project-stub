var vm = require('vm'),
    BEMHTML = require('fs').readFileSync('./desktop.bundles/index/index.bemhtml.js');

modules.define('BEMHTML', ['i-bem__i18n'], function(provide, I18N) {
    var ctx = vm.createContext({ BEM: { I18N: I18N } });
    vm.runInContext(BEMHTML, ctx);
    provide(ctx.BEMHTML);
});

modules.require(['i-bem__i18n', 'BEMHTML'], function(I18N, BEMHTML) {
    I18N.lang('ru');
    console.log(I18N('attach', 'button-text'));
    console.log(BEMHTML.apply({ block: 'bla', content: I18N('attach', 'button-text') }));

    I18N.lang('en');
    console.log(I18N('attach', 'button-text'));
    console.log(BEMHTML.apply({ block: 'bla', content: I18N('attach', 'button-text') }));
});
