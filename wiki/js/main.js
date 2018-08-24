
function fadein(){
  $("body").hide().fadeIn(1000);
}
fadein();
var searchFunction;

$(document).ready(function () { 
  /*performing a search*/
    searchFunction = function(){
      var word = $("#searchInput").val();
      var url ="https://en.wikipedia.org/w/api.php?action=opensearch&search=" +word +"&format=json&callback=?";
      $.ajax({
        type: "GET",
        url: url,
        async: false,
        dataType: "json", 
        
        success: function(data) {
          $('#results').empty()
          $('#results').hide().fadeIn(500);
          for(var i=0 ;i < 10;i++){
            var title = data[1][i];
            var brief = data[2][i];
            var link = data[3][i];
            $("#results").append("<div class='result card-panel grey lighten-5 z-depth-1'><a href='"+link+"' target='_blank' ><h4>"+title+"</h4></a><p>"+brief+"</p></div>");           
          }//end of for 
          
          $('html, body').animate({ scrollTop: $("#results").offset().top}, 1000);
        }//end of success
      });//end of ajax
    }//end of search

});