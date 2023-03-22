function openNew(){
    $("#popupNew").width("40vh");
    $("#popupNew").height("50vh");

}

function closeNew(){
    $("#popupNew").width(0);
    $("#popupNew").height(0);

}

function startGame(){
    window.location.href = "game-lobby.html";
}