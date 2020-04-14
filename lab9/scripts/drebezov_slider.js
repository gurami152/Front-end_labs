var right = -40;
var speed = 5;
var buttonRight;
var buttonLeft;
document.addEventListener("DOMContentLoaded", function(event) {
    var buttonRight = document.getElementById("right");
    buttonRight.onclick = Right;
    var buttonLeft = document.getElementById("left");
    buttonLeft.onclick = Left;
    speed1Button = document.getElementById("speed_1");
    speed1Button.onclick=Speed_1;
    speed2Button = document.getElementById("speed_2");
    speed2Button.onclick=Speed_2;
    speed3Button = document.getElementById("speed_3");
    speed3Button.onclick=Speed_3;
    speed=5;
  });
  
function Speed_1(){
    speed=5*1;
    console.log(speed);
}


function Speed_2(){
    speed=5*2;
    console.log(speed);
}

function Speed_3(){
    speed=5*3;
    console.log(speed);
}

function Right(){
    var photos = document.getElementById('slider_photos');
    if (right!=-1492){
        right = right - 242;
    }
 
    console.log(right.toString());
    photos.style.transition = speed +'s';
    photos.style.left = right +'px';
}

function Left(){
    var photos = document.getElementById('slider_photos');
    if (right!=-40){
        right = right + 242;
    }
    console.log(right.toString());
    photos.style.transition = speed +'s';
    photos.style.left = right +'px';
  }
