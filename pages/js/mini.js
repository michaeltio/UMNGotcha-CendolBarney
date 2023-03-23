function moveRight() {
    $('#object').animate({
      left: "+=4vw"
    }, 50); 
  }

function moveLeft() {
    $('#object').animate({
        left: "-=4vw"
    },50); 
}

function moveUp() {
    $('#object').animate({
        top: "-=4vw"
    }, 50); 
}

function moveDown() {
    $('#object').animate({
        top: "+=4vw"
    }, 50);
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
