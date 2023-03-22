function openNew(){
    $("#popupNew").width("60vh");
    $("#popupNew").height("60vh");

    $(".menuBtn").width(0);
    $(".menuBtn").height(0);
}

function closeNew(){
    $("#popupNew").width(0);
    $("#popupNew").height(0);

    $(".menuBtn").width("200px");
    $(".menuBtn").height("75px");
}

function openCred(){
    $("#popupCred").width("60vh");
    $("#popupCred").height("70vh");

    $(".menuBtn").width(0);
    $(".menuBtn").height(0);
}

function closeCred(){
    $("#popupCred").width(0);
    $("#popupCred").height(0);

    $(".menuBtn").width("200px");
    $(".menuBtn").height("75px"); 
}

function openLoad(){
    $("#popupLoad").width("60vh");
    $("#popupLoad").height("70vh");

    $(".menuBtn").width(0);
    $(".menuBtn").height(0);
}

function closeLoad(){
    $("#popupLoad").width(0);
    $("#popupLoad").height(0);

    $(".menuBtn").width("200px");
    $(".menuBtn").height("75px"); 
}

function startGame(){
    window.location.href = "game-lobby.html";
}

