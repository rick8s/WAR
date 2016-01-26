define(function(require) {
  var $ = require("jquery");
 
 return {

    getDeck: function() {

      // get a deck of shuffled cards for player one

      $.ajax({
        url: "http://deckofcardsapi.com/api/deck/new/shuffle/"
      }).done(function(data) {
        console.log("data", data.deck_id);
        $(".deckP1").html(data).attr("id", data.deck_id);
      });
      
      // get a deck of shuffled cards for player two

      $.ajax({
        url: "http://deckofcardsapi.com/api/deck/new/shuffle/"
      }).done(function(data) {
        console.log("data", data.deck_id);
        $(".deckP2").html(data).attr("id", data.deck_id);
      }); 
    } 
  };
});







// thinking about using promises

// define(function(require) {
//   var $ = require("jquery");
//   var Q = require("q");
//   return function() {
//     var deferred = Q.defer();
    
//     //player one deck
//     $.ajax({
//       url: "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
//       method: "GET"
//     }).done(function(data) {
//       deferred.resolve(data);
//       $(".deckP1").html(data).attr("id", data.deck_id);
//     }).fail(function(xhr, status, error) {
//       deferred.reject(error);
//     });
//     return deferred.promise;

//     //player two deck
//     $.ajax({
//       url: "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
//       method: "GET"
//     }).done(function(data) {
//       deferred.resolve(data);
//       $(".deckP2").html(data).attr("id", data.deck_id);
//     }).fail(function(xhr, status, error) {
//       deferred.reject(error);
//     });
//     return deferred.promise;
//   };
// });
