// Run Foundation
$(document).foundation();

//Zipcode Retrieval

  $('button').on('click', function() {
  

  var zipcode = $('#getWeather').val();
  

  $.simpleWeather({
    
    location: zipcode,
  
    success: function(weather) {
      

      var temp = weather.temp;

      var city = weather.city;

      var current = weather.currently;

      var code = '<i class="icon-'+ weather.code +'"></i>';

      var temp = weather.temp + '&deg;' + weather.units.temp;

      var low = 'Low: ' + weather.low + '&deg' + weather.units.temp;
      
      var high = 'High: ' + weather.high + '&deg' + weather.units.temp;
 

      // Output to hooks in HTML
      $('.code').html(code);
      $('.temp').html(temp);
      $('.city').html(city);
      $('.current').html(current);
      $('.low').html(low);
      $('.high').html(high);



      console.log(weather);
    },
  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  $('#getWeather').val('');
  
});




