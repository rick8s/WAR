define (function(require){
  var $ = require("jquery");

  return {
    addScore: function (p1cardVal, p2cardVal, numCards, p1Score, p2Score) {
      var temp1score = 0;
      var temp2score = 0;

      // check to see that both players drew
      if (p1cardVal > 0 && p2cardVal > 0) {

        // determine who had higher card and assign points to that player
        if (p1cardVal > p2cardVal) {
          temp1score = numCards;
        }

        if (p1cardVal < p2cardVal) {
          temp2score = numCards;
        }

        // if a tie occurs, assign each player one point
        if (p1cardVal == p2cardVal) {
          temp1score = 1;
          temp2score = 1;
        }


      p1Score = p1Score + temp1score;
      p2Score = p2Score + temp2score;
      console.log("new p1 score:", p1Score);
      console.log("new p2 score:", p2Score);
      }
    }   
  };
});