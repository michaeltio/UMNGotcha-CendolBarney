let avatarCode;

window.onload = function(){
    $("#avatarImg").attr("src", "/sources/images/stuart/stuart_dewasa_idle.gif")
    avatarCode = 1;
    var music = new Audio('/sources/audio/bgMusic.mp3');
    music.play();
}

function changeLeft(){
    avatarCode -= 1;
    if(avatarCode==0){
        avatarCode = 5;
    }

    switch(avatarCode){
        case 1: $("#avatarImg").attr("src", "/sources/images/stuart/stuart_dewasa_idle.gif")
            break;
        case 2: $("#avatarImg").attr("src", "/sources/images/batu/batu_dewasa_idle.gif")
            break;
        case 3: $("#avatarImg").attr("src", "/sources/images/bebek/bebek_dewasa_idle.gif")
            break;
        case 4: $("#avatarImg").attr("src", "/sources/images/slime/slime_dewasa_idle.gif")
            break;
        case 5: $("#avatarImg").attr("src", "/sources/images/masbro/masbro_dewasa_idle.gif")
            break;
    }
}

function changeRight(){
    avatarCode += 1;
    if(avatarCode==6){
        avatarCode = 1;
    }
    
    switch(avatarCode){
        case 1: $("#avatarImg").attr("src", "/sources/images/stuart/stuart_dewasa_idle.gif")
            break;
        case 2: $("#avatarImg").attr("src", "/sources/images/batu/batu_dewasa_idle.gif")
            break;
        case 3: $("#avatarImg").attr("src", "/sources/images/bebek/bebek_dewasa_idle.gif")
            break;
        case 4: $("#avatarImg").attr("src", "/sources/images/slime/slime_dewasa_idle.gif")
            break;
        case 5: $("#avatarImg").attr("src", "/sources/images/masbro/masbro_dewasa_idle.gif")
            break;
    }
}

function openNew(){
    $("#popupNew").width("60vh");
    $("#popupNew").height("70vh");

    $(".menuBtn").width(0);
    $(".menuBtn").height(0);

    $("#mainTitle").css("visibility", "hidden");
}

function closeNew(){
    $("#popupNew").width(0);
    $("#popupNew").height(0);

    $(".menuBtn").width("200px");
    $(".menuBtn").height("75px");
    
    $("#errorMsg").css("visibility", "hidden");
    $('#nameInput').val(""); 

    $("#mainTitle").css("visibility", "visible");

}

function openCred(){
    $("#popupCred").width("60vh");
    $("#popupCred").height("70vh");
    
    $(".menuBtn").width(0);
    $(".menuBtn").height(0);

    $("#mainTitle").css("visibility", "hidden");
}

function closeCred(){
    $("#popupCred").width(0);
    $("#popupCred").height(0);
    
    $(".menuBtn").width("200px");
    $(".menuBtn").height("75px"); 

    $("#mainTitle").css("visibility", "visible");
}

function startGame(){
    var name = $('#nameInput').val()
    
    if(name!=""){
        localStorage.setItem("nameGiven", name);
        $("#errorMsg").css("visibility", "hidden");

        resetStats();
        sendAvatar();
        window.location.href = "game-lobby.html";
    }
    else{
        $("#errorMsg").css("visibility", "visible");
    }
}

$(document).ready(function() {
    $('#nameInput').keypress(function(e) {
      if(e.which == 13) {
        $('#createBtn').click();
      }
    });
  });

$(document).ready(function(){
    $("button").click(function(){
        var sound = new Audio('/sources/audio/buttonClick1.mp3');
        sound.play();
    })

    
    $("button").mouseover(function(){
        var sound = new Audio('/sources/audio/hover.mp3');
        sound.play();
    })
})

function homeBtn(){
    window.location.href = "main-menu.html"
}

function resetStats(){
    localStorage.setItem("curr-Eat", 100);
    localStorage.setItem("curr-Sleep", 100);
    localStorage.setItem("curr-Play", 100);
    localStorage.setItem("curr-Health", 100);

    localStorage.setItem("curr-Minute", "00");
    localStorage.setItem("curr-Hour", "07");

    localStorage.setItem("curr-Days", "1");
    localStorage.setItem("curr-Level", "1");

    localStorage.setItem("bg-Now", "/sources/images/backgrounds/bgMorning.png");
}

function sendAvatar(){
    let avatarChosen
    switch(avatarCode){
        case 1: avatarChosen = "/stuart";
            break;
        case 2: avatarChosen = "/batu";
            break;
        case 3: avatarChosen = "/bebek";
            break;
        case 4: avatarChosen = "/slime";
            break;
        case 5: avatarChosen = "/masbro";
            break;
    }
    localStorage.setItem("avatar-Chosen", avatarChosen);
}