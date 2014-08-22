modules.define('navigation', ['i-bem__dom'], function (provide, BEMDOM)
{
  provide(BEMDOM.decl({block: this.name}, {
    onSetMod: {
      'js': function ()
      {
        console.log("navigation активен")
      }
    }

  }, {
    live: function ()
    {
      this
        .liveBindTo('click', function ()
        {
          var wrapper = this.findBlockOutside('wrapper');
          console.log(wrapper); //null
          console.log(this.findBlockInside('wrapper')); //null
          console.log(this.findBlockOn('wrapper')); //null
          if (this.hasMod("open")) {
            this.delMod("open");
            wrapper.delMod("compress");
          } else {
            this.setMod("open", "true");
            wrapper.setMod("compress", "true");
          }

        });

    }
  }));
});
