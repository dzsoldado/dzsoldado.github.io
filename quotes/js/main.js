$(document).ready(function(){
  twlink=""; 
   
     $("#getQuote").on("click",function(){
       $.getJSON("https://talaikis.com/api/quotes/random/ ",function(json){
         $(".quote").animate({ opacity: 0}, 300,function() {
           $(".quote").animate({ opacity: 1}, 300);
           $("#quote-text").html(json.quote);
           $("#quote-author").html(json.author);
         });
         
         //Twitter share
         twlink ='https://twitter.com/intent/tweet?text=' +'" '+json.quote+' " '+" - "+ json.author +"&hashtags=Quote";
         $("a.twitter").attr("href",twlink);
         $("a.twitter").attr("onclick","return !window.open(this.href, 'Twitter', 'width=640,height=300') ");
 
         })
      });
      jQuery('#getQuote').click();     
 });