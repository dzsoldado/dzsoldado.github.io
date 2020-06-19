$(document).ready(function(){
 twlink=""; 
  
    $("#getQuote").on("click",function(){
           
       $.ajax({
            url: "https://api.forismatic.com/api/1.0/?",
            dataType: "jsonp",
            data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
            success: function( response ) {
              $(".quote").animate({ opacity: 0}, 300,function() {
                $(".quote").animate({ opacity: 1}, 300);
                $("#quote-text").html(response.quoteText);
                $("#quote-author").html(response.quoteAuthor);
              });
              
              twlink ='https://twitter.com/intent/tweet?text=' +'" '+response.quoteText+' " '+" - "+ response.quoteAuthor +"&hashtags=Quote";
              $("a.twitter").attr("href",twlink);
              $("a.twitter").attr("onclick","return !window.open(this.href, 'Twitter', 'width=640,height=300') ");
            }
        });
    });
  
        jQuery('#getQuote').click();     

 });
    
        
