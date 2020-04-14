var right = -40;
var speed = 5;
$(document).ready(function(){
    $('#right').on('click',function(){
    var photos = $('#slider_photos');
        if (right!=-1492){
            right = right - 242;
        }
        photos.css('left',right + 'px');
        photos.css('transition', speed + 's');
    });

    $('#left').on('click',function(){
        var photos = $('#slider_photos');
        if (right!=-40){
            right = right + 242;
        }
        photos.css('left', right + 'px');
        photos.css('transition', speed + 's');
  });
  
  $('#speed_1').on('click',function(){
    var photos = $('#slider_photos');
    speed = 5*1;
    photos.css('transition', speed + 's');
  });
  $('#speed_2').on('click',function(){
    var photos = $('#slider_photos');
    speed = 5*2;
    photos.css('transition', speed + 's');
  });
  $('#speed_3').on('click',function(){
    var photos = $('#slider_photos');
    speed = 5*3;
    photos.css('transition', speed + 's');
  });

});
