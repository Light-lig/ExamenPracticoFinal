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



  gsap.from("#play", {duration: 1, y: 300, x:300, x:300, y:300, opacity: 0, scale: 0.5});
  gsap.from("#titulo", {duration: 1, y: -300, opacity: 0, scale: 0.5});
  gsap.from("#precio", {duration: 3, y: 300, x:-300, opacity: 0, scale: 0.5, ease: "bounce"});

});
