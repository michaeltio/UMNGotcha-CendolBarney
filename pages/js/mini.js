function moveRight() {
  var rightNow = parseInt($('#object').css('left'));
  if(rightNow<850){
    $('#object').animate({
      left: "+=3vw"
    }, 50); 
  }
  else{
    $('#object').animate({
      left: "50vw"
    }, 50); 
  }
  checkCollision();
}
    

function moveLeft() {
    var leftNow = parseInt($('#object').css('left'));
    if(leftNow>3){
        $('#object').animate({
            left: "-=3vw"
        },50); 
    }
    else{
      $('#object').animate({
        left: ""
    },50); 
    }
    checkCollision();
}

function moveUp() {
    var topNow = parseInt($('#object').css('top'));
    if(topNow>5){
        $('#object').animate({
            top: "-=3vh"
        }, 50); 
    }
    else{
      $('#object').animate({
        top: ""
    }, 50); 
    }
    checkCollision();
}

function moveDown() {
    var topNow = parseInt($('#object').css('top'));
    if(topNow<350){
        $('#object').animate({
            top: "+=3vh"
        }, 50);
    }
    else{
      $('#object').animate({
        top: "40vh"
    }, 50);
    }
    checkCollision();
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

setInterval(timer, 1000);

let timeLeft;

function timer(){
  timeLeft = parseInt($("#gameTimer").text())
  
  if(timeLeft > 0){
    timeLeft -= 1;
    var clock = new Audio('/sources/audio/timer.mp3');
    clock.play();
    $("#gameTimer").text(timeLeft);
  }
  else{
    $("#target").css("display", "none");
    $("#gameTimer").text("Time's Up!");
    setInterval(gameEnd,1500);
  }
}

function moveTarget(){
  var ranH = randomHeight() + "px";
  var ranW = randomWidth() + "px";

  
  $("#target").css("top",ranH);
  $("#target").css("left",ranW);
}

function randomHeight() {
  let max = 280;
  let min = -190;
  return Math.random() * (max - min) + min;
}

function randomWidth() {
  let max = 1026;
  let min = 0;
  return Math.random() * (max - min) + min;
}

function checkCollision(){
    var object = $('#object');
    var target = $('#target');

    var objectLeft = object.offset().left;
    var objectTop = object.offset().top;
    var objectBottom = objectTop + object.outerHeight();
    var objectRight = objectLeft + object.outerWidth();

    var targetLeft = target.offset().left;
    var targetTop = target.offset().top;
    var targetBottom = targetTop + target.outerHeight();
    var targetRight = targetLeft + target.outerWidth();
    
    if (objectRight >= targetLeft && objectLeft <= targetRight && objectBottom >= targetTop && objectTop <= targetBottom) {
      moveTarget();
      var point = new Audio('/sources/audio/point.mp3');
      point.play();
      scoreNow = parseInt($("#stars").text());
      scoreNow += 1;
      $("#stars").text(scoreNow);
    }
  }

function gameEnd(){
    $("#popupGameEnd").width("60vh");
    $("#popupGameEnd").height("70vh");

    $("#moveArea").width(0);
    $("#moveArea").height(0);

    $("#gameArea").width(0);
    $("#gameArea").height(0);

    $("#gameTimerBox").width(0);
    $("#gameTimerBox").height(0);

    $("#starsEnd").text(scoreNow);
}

function backLobby(){
    let currEat = localStorage.getItem("curr-Eat");
    let currSleep = localStorage.getItem("curr-Sleep");
    let currPlay = localStorage.getItem("curr-Play");
    
    currEat -= 40;
    currSleep -= 40;
    currPlay = parseInt(currPlay)
    currPlay = currPlay + scoreNow;
  

    localStorage.setItem("curr-Eat", currEat);
    localStorage.setItem("curr-Sleep", currSleep);
    localStorage.setItem("curr-Play", currPlay);

    window.location.href = "game-lobby.html";
}