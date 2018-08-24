jQuery(window).on('load', function(){

  var url="https://wind-bow.glitch.me/twitch-api/streams/";

  var channels = ["freecodecamp","esl_csgo","pewdiepie","eleaguetv"];

  var get_status  = function(channel){
    var status = "#"+channel+"_status";
    var desc = "#"+channel+"_desc";
    $.ajax({
      type: "GET",
      url: url+channel,
      async: false,
      dataType: "json",

      success: function(data) {
        if (data.stream == null) {
          $(status).attr("data-badge-caption",'Offline');
          $(status).addClass('new badge red');
          $(desc).text("This channel is currently offline");
        } else {
          $(status).attr("data-badge-caption",'Online');
          $(status).addClass('new badge green');
          $(desc).text(data.stream.channel.status);
        }
      }
    });
  }

  //getting status

  for(var i=0;i<4;i++){
    get_status(channels[i]);
  }




});//end of file
