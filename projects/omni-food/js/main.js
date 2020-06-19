$(document).ready(function(){

 // #######  Sticky Navigation ###############
  $("#features").waypoint(function(direction){
    if(direction == "down"){
      $("nav").addClass("sticky");
    }else{
      $("nav").removeClass("sticky");
    }
  },{
     offset: '60px'
  })

  //############ Mobile Nav ##################

  $(".mobile-nav-icon ").click(function(){
    var nav= $(".main-nav");
    var icon= $(".mobile-nav-icon i");

    nav.slideToggle(200);

    if(icon.hasClass("ion-md-menu")){
      icon.addClass("ion-md-close");
      icon.removeClass("ion-md-menu");
    }else{
      icon.addClass("ion-md-menu");
      icon.removeClass("ion-md-close");
    }
  })

  
  $(".main-nav a").click(function(){
    $(".mobile-nav-icon ").click();
  })



  //################ ANIMATED ################
  $("#features").waypoint(function(direction){
    $(".wp1").addClass("animated fadeIn");
  },{
    offset: '60px'
  })
  $("#how-it-works").waypoint(function(direction){
    $(".app-screen").addClass("animated slideInUp");
  },{
    offset: '60px'
  })
  $("#pricing").waypoint(function(direction){
    $(".wp2").addClass("animated pulse");
  },{
    offset: '60px'
  })


  // ############### Buttons ##################

  $(".scrollToPricing").click(function(){
    $('html, body').animate({ scrollTop: $("#pricing").offset().top}, 1000); 
  })
  $(".scrollToStart").click(function(){
    $('html, body').animate({ scrollTop: $("#features").offset().top}, 1000); 
  })


  //############# Navigation Scroll ###########
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

    // MAPS

    var map = new GMaps({
      div: '.map',
      lat: 36.658647,
      lng: 2.794790,
      zoom: 12,
    });

    map.addMarker({
      lat: 36.658647,
      lng: 2.743774,
      title: 'Fouka',
      
    });

})