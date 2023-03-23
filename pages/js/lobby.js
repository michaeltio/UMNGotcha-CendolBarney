window.onload = function(){
    var newName = localStorage.getItem("nameGiven");
    $('#name').text(newName);

    var clockHour = $("#clockHour").text();
    var hour = parseInt(clockHour);


    let greetMsg; 
    
    if(hour>4 && hour<11)
        greetMsg = "Good Morning";
    else if(hour>10 && hour<15)
        greetMsg = "Good Afternoon";
    else if(hour>14 && hour<19)
        greetMsg = "Good Evening";
    else
        greetMsg = "Good Night";
    $("#greetText").text(greetMsg);
}



setInterval(timeSystem, 1000);

function timeSystem(){
    var eatVal = $('#eatBar').attr('value');
    if(eatVal>100)
        eatVal = 100;
    if(eatVal<0)
        eatVal = 0;
    eatVal -= 0.1;
    $("#eatBar").attr("value", eatVal);

    var sleepVal = $('#sleepBar').attr('value');
    if(sleepVal>100)
        sleepVal = 100;
    if(sleepVal<0)
        sleepVal = 0;
    sleepVal -= 0.1;
    $("#sleepBar").attr("value", sleepVal);
   
    var playVal = $('#playBar').attr('value');
    if(playVal > 100)
        playVal = 100;
    if(playVal < 0)
        playVal = 0;
    playVal -= 0.1;
    $("#playBar").attr("value", playVal);
   
    var healthVal = $('#healthBar').attr('value');
    if(healthVal>100)
        healthVal = 100;
    if(healthVal<0)
        healthVal = 0;
    if(eatVal>40){
        healthVal -= 0.1;
    }
    else if(eatVal>20){
        healthVal -= 2;
    }
    else if(eatVal>2){
        healthVal -= 3;
    }
    else{
        healthVal -= 5;
    }
    $("#healthBar").attr("value", healthVal);

    var clockMinute = $("#clockMinute").text();
    var clockHour = $("#clockHour").text();
    
    var hour = parseInt(clockHour);
    var minute = parseInt(clockMinute);
   
    if(minute>58){
        hour += 1;
        minute = -1;
    }
    if(hour>23){
        hour = 0;
    }

    minute += 1;

    let minuteFormatted = minute.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })
    let hourFormatted = hour.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })

    $("#clockMinute").text(minuteFormatted);
    $("#clockHour").text(hourFormatted);
    
    let greetMsg; 
    
    if(hour>4 && hour<11)
        greetMsg = "Good Morning";
    else if(hour>10 && hour<15)
        greetMsg = "Good Afternoon";
    else if(hour>14 && hour<19)
        greetMsg = "Good Evening";
    else
        greetMsg = "Good Night";
    $("#greetText").text(greetMsg);
}

    
function minigameBtn(){
    window.location.href = "mini-game.html";
}

function medsBtn(){
    var healthVal = parseFloat($('#healthBar').attr('value'));
    healthVal += 15;
    $("#healthBar").attr("value", healthVal);
}

function eatBtn(){
    var eatVal = parseFloat($('#eatBar').attr('value'));
    eatVal += 30;
    $("#eatBar").attr("value", eatVal);

    var healthVal = parseFloat($('#healthBar').attr('value')) ;
    healthVal += 30;
    $("#healthBar").attr("value", healthVal);
}

function sleepBtn(){
    var clockHour = $("#clockHour").text();
    var hour = parseInt(clockHour);
    
    hour += 8;

    if(hour>23){
        hour -= 24;
    }
    
    let hourFormatted = hour.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })

    $("#clockHour").text(hourFormatted);

    var eatVal = $('#eatBar').attr('value');
    eatVal -= 40;
    $("#eatBar").attr("value", eatVal);

    var sleepVal = parseFloat($('#sleepBar').attr('value')); 
    sleepVal += 60;
    $("#sleepBar").attr("value", sleepVal);
}

