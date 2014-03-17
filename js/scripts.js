// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

	$.simpleWeather({
    
    location: '99206',
    
    success: function(weather) {
      
      // Get & Store Weather Data
      // html = '<h2><i class="icon-' + weather.code+'"></i> ' + weather.temp +'&deg;' + weather.units.temp+'</h2>';
      var temp, tomHi, tomLo, cityAndState; 

      spokanetemp = weather.temp + '<span> f</span>';
      spokanetomHi = weather.tomorrow.high;
      spokanetomLo = weather.tomorrow.low;
      spokanecityAndState = weather.city + ' , ' + weather.region;

      console.log(cityAndState);

      // Display Weather
      $('.spokanetemp').html(spokanetemp);
      $('.spokanetomHi').html(spokanetomHi);
      $('.spokanetomLo').html(spokanetomLo);
      $('.spokanecityAndState').html(spokanecityAndState);

    },
    
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  
  });

	console.log('Page Loaded. Lets Do this!');

}); 
