define(function(require) {
  var $ = require("jquery");
  // var p1cardVal;
  var counters = require("counters");

  return {
    p1draw: function () {
      var deckOneId = $('.deckP1').attr('id');
      var p1tempVal = 0;

    // determine the value of player ones card then return it for comparison  
    $.ajax({
      url: "http://deckofcardsapi.com/api/deck/" + deckOneId + "/draw/?count=1"
      }).done(function(data) {
        console.log("data", data);
        $(".cardP1").html("<img src='" + data.cards[0].images.png + "'>");

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
          // set global variable to current card value for use in counter module
          p1cardVal = p1tempVal;
          

          console.log("this is p1Value", p1tempVal);
          

      });
    },
      
    getValue: function() { 
       counters.addScore(p1cardVal); 
        return p1cardVal;

    }      
  };  
});




// think about using promises
// define(function(require) {
//   var $ = require("jquery");
//   var Q = require("q");
//   var deckOneId = $(".deckP1").html(data).attr("id");

//   return function(deckOneID) {
//     var deferred = Q.defer();
//     $.ajax({
//       url: "http://deckofcardsapi.com/api/deck/" + deckOneID + "/draw/?count=1"
//       method: "GET"
//     }).done(function(data) {
//       $(".cardP1").html("<img src='" + data.cards[0].images.png + "'>");
//       deferred.resolve(data);
//     }).fail(function(xhr, status, error) {
//       deferred.reject(error);
//     });
//     return deferred.promise;
//   };
// });
