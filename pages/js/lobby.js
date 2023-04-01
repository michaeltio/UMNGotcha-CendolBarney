let avatarChosen;
let avatarAge;
let avatarAction;

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

    loadInfo();
    loadAvatar();
}



setInterval(timeSystem, 1000);


function timeSystem(){
    statsOvertime();
    let days = parseInt($("#dayCounter").text()); 

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
        days +=1;
        if(days%5==0){
            let level = parseInt($("#levelNum").text()) ;
            level+=1;
            $("#levelNum").text(level)
            if(level>9){
                avatarAge = "_dewasa"
                updateAvatar()
            }
            else if(level>4){
                avatarAge = "_anak"
                updateAvatar();
            }
        }
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
    saveInfo();
    window.location.href = "mini-game.html";
}

function medsBtn(){
    var healthVal = parseFloat($('#healthBar').attr('value'));
    healthVal += 15;
    $("#healthBar").attr("value", healthVal);
    avatarAction = "_makan.gif"
    updateAvatar();
    avatarAction = "_idle.gif"
    setInterval(updateAvatar, 3000)
}

function eatBtn(){
    var eatVal = parseFloat($('#eatBar').attr('value'));
    eatVal += 30;
    $("#eatBar").attr("value", eatVal);

    var healthVal = parseFloat($('#healthBar').attr('value')) ;
    healthVal += 30;
    $("#healthBar").attr("value", healthVal);

    var playVal = parseFloat($('#playBar').attr('value')); 
    playVal -= 15;
    $("#playBar").attr("value", playVal);

    avatarAction = "_makan.gif"
    updateAvatar();
    avatarAction = "_idle.gif"
    setInterval(updateAvatar, 3000)
}

function sleepBtn(){
    var clockHour = $("#clockHour").text();
    var hour = parseInt(clockHour);
    let days = parseInt($("#dayCounter").text()); 

    hour += 8;

    if(hour>23){
        days +=1;
        $("#dayCounter").text(days)
        hour -= 24;
        if(days%5==0){
            let level = parseInt($("#levelNum").text()) ;
            level+=1;
            $("#levelNum").text(level);
            if(level>9){
                avatarAge = "_dewasa"
                updateAvatar()
            }
            else if(level>4){
                avatarAge = "_anak"
                updateAvatar();
            }
        }
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
    
    var playVal = parseFloat($('#playBar').attr('value')); 
    playVal -= 15;
    $("#playBar").attr("value", playVal);

    avatarAction = "_tidur.gif"
    updateAvatar();
    avatarAction = "_idle.gif"
    setInterval(updateAvatar, 3000)
    
}

function saveInfo(){
    var currEat = $("#eatBar").val();
    var currSleep = $("#sleepBar").val();
    var currPlay = $("#playBar").val();
    var currHealth = $("#healthBar").val();

    localStorage.setItem("curr-Eat", currEat);
    localStorage.setItem("curr-Sleep", currSleep);
    localStorage.setItem("curr-Play", currPlay);
    localStorage.setItem("curr-Health", currHealth);
    
    currMinute = $("#clockMinute").text();
    currHour = $("#clockHour").text();
    
    localStorage.setItem("curr-Minute", currMinute);
    localStorage.setItem("curr-Hour", currHour);
    
    let days = parseInt($("#dayCounter").text()); 
    localStorage.setItem("curr-Days", days);
    
    let level = parseInt($("#levelNum").text()); 
    localStorage.setItem("curr-Level", level);
    
    localStorage.setItem("avatar-Age", avatarAge);
}

function loadAvatar(){
    avatarChosen = localStorage.getItem("avatar-Chosen");
    avatarAge = "_bayi"
    avatarAction = "_idle.gif"
    updateAvatar();
}

function updateAvatar(){
    sourceImg = "/sources/images" + avatarChosen + avatarChosen + avatarAge + avatarAction;
    $("#avatarImg").attr("src", sourceImg)
}

function loadInfo(){
    currEat = localStorage.getItem("curr-Eat");
    currSleep = localStorage.getItem("curr-Sleep");
    currPlay = localStorage.getItem("curr-Play");
    currHealth = localStorage.getItem("curr-Health");

    $("#eatBar").attr("value", currEat);
    $("#sleepBar").attr("value", currSleep);
    $("#playBar").attr("value", currPlay);
    $("#healthBar").attr("value", currHealth);

    currMinute = localStorage.getItem("curr-Minute");
    currHour = localStorage.getItem("curr-Hour");

    $("#clockMinute").text(currMinute);
    $("#clockHour").text(currHour);    

    days = localStorage.getItem("curr-Days")
    $("#dayCounter").text(days)

    level = localStorage.getItem("curr-Level")
    $("#levelNum").text(level)
}

function statsOvertime(){
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
        healthVal -= 1;
    }
    else if(eatVal>2){
        healthVal -= 2;
    }
    else{
        healthVal -= 3;
    }

    if(sleepVal>40){
        healthVal -= 0.1;
    }
    else if(sleepVal>20){
        healthVal -= 1;
    }
    else if(sleepVal>2){
        healthVal -= 2;
    }
    else{
        healthVal -= 3;
    }

    if(playVal>40){
        healthVal -= 0.1;
    }
    else if(playVal>20){
        healthVal -= 1;
    }
    else if(playVal>2){
        healthVal -= 2;
    }
    else{
        healthVal -= 3;
    }
    $("#healthBar").attr("value", healthVal);

    if(healthVal<0){
        $("#popupGameOver").width("60vh");
        $("#popupGameOver").height("70vh");

        $("#stats").width(0);
        $("#stats").height(0);
        
        $("#avatar").width(0);
        $("#avatar").height(0);

        $("#levelProgress").width(0);
        $("#levelProgress").height(0);

        $("#actions").width(0);
        $("#actions").height(0);

    }
}