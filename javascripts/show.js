define(function(require) {
  var $ = require("jquery");
 
 return {

    toggler: function(divId) {
      $("#" + divId).show();
      //$("#" + divId).toggleClass("hidden");
    }
  };
});