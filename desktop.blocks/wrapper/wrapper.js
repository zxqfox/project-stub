modules.define('wrapper', ['i-bem__dom'], function (provide, BEMDOM)
{
  provide(BEMDOM.decl({block: this.name}, {
    onSetMod: {
      'js': function ()
      {
        console.log("wrapper активен")
      }
    }
  }, {
    live: false
  }));

});
