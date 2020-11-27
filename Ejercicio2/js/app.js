$(document).ready(function() {
  const settings = {
  	"async": true,
  	"crossDomain": true,
  	"url": "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
  	"method": "GET",
  	"headers": {
  		"accept": "application/json",
  		"x-rapidapi-key": "d9b8924dcbmsh276ab97322b8759p19b007jsna720570c22d4",
  		"x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com"
  	}
  };
  var k = 1;
    for (var i = 0; i < 4; i++) {
      $.ajax(settings).done(function (response) {
        $("#mensaje"+k).append("<p>"+response.value+"</p>");
          k++
      });
    }
    $('#animacion').waypoint(function() {
      gsap.fromTo("#play",{autoAlpha: 0}, {autoAlpha: 1, duration: 4});
      gsap.fromTo("#titulo",{ y: 0,x:0},{x:100,y:0,duration: 2});
      gsap.fromTo("#precio",{duration: 1, y: 100,x:100, opacity: 0}, {duration: 3, y: 0, opacity: 1, x:100, scale: 1, ease: "bounce"});
}, {
    offset: '100%'
});


});
