define(function(require) {
  var $ = require("jquery");
  return {
    p1draw: function () {
      var deckOneId = $('.deckP1').attr('id');
      var p1tempVal = 0;
  
    $.ajax({
      url: "http://deckofcardsapi.com/api/deck/" + deckOneId + "/draw/?count=1"
      }).done(function(data) {
        console.log("data", data);
        $(".cardP1").html(data.cards[0].images.png);

          if (data.cards[0].value <= 10) {
            p1tempVal = data.cards[0].value;
          }

          if (data.cards[0].value == "JACK") {
            p1tempVal = 11;
          }

          if (data.cards[0].value == "QUEEN") {
            p1tempVal = 12;
          }

          if (data.cards[0].value == "KING") {
            p1tempVal = 13;
          }

          if (data.cards[0].value == "ACE") {
            p1tempVal = 14;
          }
          // set global card val to current card val for use in counter module
          p1cardVal = p1tempVal;
          console.log("this is p1Value", p1tempVal);
          console.log("this is p1cardVal:", p1cardVal);
      });
    } 
  }; 
});
// http:deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1

// http:deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1


//example from console:

// data k4pteyrijegm
// get-new-deck.js:10 data h4mqcpcbst2c
// $('.deckP1').attr('id')
// "h4mqcpcbst2c"
// var deckOneId = $('.deckP1').attr('id')
// undefined
// var url = "http://deckofcardsapi.com/api/deck/" + deckOneId + "/draw/?count=1"
// undefined
// url
// "http://deckofcardsapi.com/api/deck/h4mqcpcbst2c/draw/?count=1"