define (function(require){
  var $ = ("jquery");

  return {
    addScore: function (data) {
      var temp1score = 0;
      var temp2score = 0;

      if (p1cardVal > p2cardVal) {
        temp1score = numCards;
      }

      if (p1cardVal < p2cardVal) {
        temp2score = numCards;
      }

      if (p1cardVal == p2cardVal) {
        temp1score = 1;
        temp2score = 1;
      }

      p1Score = p1Score + temp1score;
      p2Score = p2Score + temp2score;

    }   
  };
});