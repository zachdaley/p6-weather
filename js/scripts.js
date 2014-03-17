// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

	$.simpleWeather({
    
    location: '99206',
    
    success: function(weather) {
      
      // Get & Store Weather Data
      // html = '<h2><i class="icon-' + weather.code+'"></i> ' + weather.temp +'&deg;' + weather.units.temp+'</h2>';
      var spokanetemp, spokanetomHi, spokanetomLo, spokanecityAndState; 

      spokanetemp = weather.temp + '<span> f</span>';
      spokanetomHi = weather.tomorrow.high;
      spokanetomLo = weather.tomorrow.low;
      spokanecityAndState = weather.city + ' , ' + weather.region;


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

    $.simpleWeather({

     location: '98101',
    
    success: function(weather) {
      
      // Get & Store Weather Data
      // html = '<h2><i class="icon-' + weather.code+'"></i> ' + weather.temp +'&deg;' + weather.units.temp+'</h2>';
      var seattletemp, seattletomHi, seattletomLo, seattlecityAndState; 

      seattletemp = weather.temp + '<span> f</span>';
      seattletomHi = weather.tomorrow.high;
      seattletomLo = weather.tomorrow.low;
      seattlecityAndState = weather.city + ' , ' + weather.region;


      // Display Weather
      $('.seattletemp').html(seattletemp);
      $('.seattletomHi').html(seattletomHi);
      $('.seattletomLo').html(seattletomLo);
      $('.seattlecityAndState').html(seattlecityAndState);

    },

     error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }

    });

     $.simpleWeather({

     location: '98902',
    
    success: function(weather) {
      
      // Get & Store Weather Data
      // html = '<h2><i class="icon-' + weather.code+'"></i> ' + weather.temp +'&deg;' + weather.units.temp+'</h2>';
      var yakimatemp, yakimatomHi, yakimatomLo, yakimacityAndState; 

      yakimatemp = weather.temp + '<span> f</span>';
      yakimatomHi = weather.tomorrow.high;
      yakimatomLo = weather.tomorrow.low;
     yakimacityAndState = weather.city + ' , ' + weather.region;


      // Display Weather
      $('.yakimatemp').html(yakimatemp);
      $('.yakimatomHi').html(yakimatomHi);
      $('.yakimatomLo').html(yakimatomLo);
      $('.yakimacityAndState').html(yakimacityAndState);

    },

     error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }

    });
}); 


