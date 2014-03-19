// Run Foundation
$(document).foundation();

//Zipcode Retrieval

  $('button').on('click', function() {
  

  var zipcode = $('#getWeather').val();
  

  $.simpleWeather({
    
    location: zipcode,
  
    success: function(weather) {
      

      var temp = weather.temp;

      var cityAndState = weather.city + ',' + weather.region;

      var current = weather.currently;

      var code = '<img src=' + weather.image + '>';

      var temp = weather.temp + '&deg;' + weather.units.temp;

      var low = 'Low: ' + weather.low + '&deg' + weather.units.temp;
      
      var high = 'High: ' + weather.high + '&deg' + weather.units.temp;
 

      // Output to hooks in HTML
      $('.code').html(code);
      $('.temp').html(temp);
      $('.cityAndState').html(cityAndState);
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




