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

    



function homeBtn(){
    window.location.href = "main-menu.html"
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
   
}

