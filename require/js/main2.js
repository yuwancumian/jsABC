require.config({

    paths: {
        mustache: 'mustache.min',
        text: 'libs/require/plugins/text',
        eg: '../eg.html',
        aa: 'aa',
        bb: 'bb'
    },

    waitSeconds: 10111

});
require(['mustache','aa','bb','text!eg'],function ($,aa,bb,eg){
    var myApp = {
      name : "Hi Xixi"  
    };
    var template = "<h1> {{name}} </h1>";
    var html = $.to_html(template,myApp);
    document.write(html);
});
