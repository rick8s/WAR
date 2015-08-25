define(function(require) {
  var $ = require("jquery");

  return {
    p2draw: function () {
      var deckTwoId = $('.deckP2').attr('id');
      var p2tempVal = 0;


     $.ajax({

      url: "http://deckofcardsapi.com/api/deck/" + deckTwoId + "/draw/?count=1"
      }).done(function(data) {
        console.log("data", data);
        $(".cardP2").html(data.cards[0].images.png);

          if (data.cards[0].value <= 10) {
            p2tempVal = data.cards[0].value;
          }

          if (data.cards[0].value == "JACK") {
            p2tempVal = 11;
          }

          if (data.cards[0].value == "QUEEN") {
            p2tempVal = 12;
          }

          if (data.cards[0].value == "KING") {
            p2tempVal = 13;
          }

          if (data.cards[0].value == "ACE") {
            p2tempVal = 14;
          }
          // set global variable to current card value for use in counter module
          p2cardVal = p2tempVal;

          console.log("this is p2Value", p2tempVal);
          console.log("this is p2cardVal:", p2cardVal);
      });
    } 
  };
});