function openNew(){
    $("#popupNew").width("60vh");
    $("#popupNew").height("60vh");

    $(".menuBtn").width(0);
    $(".menuBtn").height(0);
}

function closeNew(){
    $("#popupNew").width(0);
    $("#popupNew").height(0);

    $(".menuBtn").width("150px");
    $(".menuBtn").height("50px");
}

function openCred(){
    $("#popupCred").width("60vh");
    $("#popupCred").height("50vh");

    $(".menuBtn").width(0);
    $(".menuBtn").height(0);
}

function closeCred(){
    $("#popupCred").width(0);
    $("#popupCred").height(0);

    $(".menuBtn").width("150px");
    $(".menuBtn").height("50px"); 
}

function startGame(){
    window.location.href = "game-lobby.html";
}

