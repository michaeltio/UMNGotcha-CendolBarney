function moveRight() {
    $('#object').animate({
      left: "+=3vw"
    }, 50); 
  }

function moveLeft() {
    var leftNow = parseInt($('#object').css('left'));
    if(leftNow>3){
        $('#object').animate({
            left: "-=3vw"
        },50); 
    }
}

function moveUp() {
    var topNow = parseInt($('#object').css('top'));
    if(topNow>5){
        $('#object').animate({
            top: "-=3vh"
        }, 50); 
    }
}

function moveDown() {
    var topNow = parseInt($('#object').css('top'));
    if(topNow<450){
        $('#object').animate({
            top: "+=3vh"
        }, 50);
    }
}


$(document).ready(function() {
    $(document).keydown(function(e) {
      let dir = e.keyCode;
      if(dir==37){
        moveLeft();
      }
      else if(dir==39){
        moveRight();
      }
      else if(dir==38){
        moveUp();
      }
      else if(dir==40){
        moveDown();
      }
    });
  });
