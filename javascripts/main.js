requirejs.config({
  baseUrl: "./javascripts",
  paths: {
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "firebase": "../lib/bower_components/firebase/firebase",
    "lodash": "../lib/bower_components/lodash/lodash.min",
    "q": "../lib/bower_components/q/q"
  },
  shim: {
    "bootstrap": ["jquery"],
    "firebase": {
      exports: "Firebase"
    }
  }
});

requirejs(["dependencies", "get-new-deck", "player-one-draw", "player-two-draw","counters"], 
  function(dependencies, getDeck, p1draw, p2draw, counters) {
    var p1cardVal = 0;
    var p2cardVal = 0;
    var p1Score = 0;
    var p2Score = 0;
    var numCards = 0;

    $(".getCards").on("click", function(){
        getDeck.getDeck();
       
    });

    $("#drawP1").on("click", function(){
         p1draw.p1draw();
         numCards = numCards + 1;
         console.log("numCards:", numCards);
    });

    $("#drawP2").on("click", function(){
        p2draw.p2draw();
        numCards = numCards + 1;
        console.log("numCards:", numCards);
   });   

});