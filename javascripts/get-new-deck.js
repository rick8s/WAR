define(function(require) {
  var $ = require("jquery");
 
 return {
    getDeck: function() {
      // get a deck for player one
      $.ajax({
        url: "http://deckofcardsapi.com/api/deck/new/shuffle/"
      }).done(function(data) {
        console.log("data", data.deck_id);
        $(".deckP1").html(data).attr("id", data.deck_id);
      });
      // get a deck for player two
      $.ajax({
        url: "http://deckofcardsapi.com/api/deck/new/shuffle/"
      }).done(function(data) {
        console.log("data", data.deck_id);
        $(".deckP2").html(data).attr("id", data.deck_id);
      }); 
    }
  };
});