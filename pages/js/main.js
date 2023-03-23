function openNew(){
    $("#popupNew").width("60vh");
    $("#popupNew").height("70vh");

    $(".menuBtn").width(0);
    $(".menuBtn").height(0);
}

function closeNew(){
    $("#popupNew").width(0);
    $("#popupNew").height(0);

    $(".menuBtn").width("200px");
    $(".menuBtn").height("75px");
    
    $("#errorMsg").css("visibility", "hidden");
    $('#nameInput').val(""); 
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
    var name = $('#nameInput').val()
    
    if(name!=""){
        localStorage.setItem("nameGiven", name);
        $("#errorMsg").css("visibility", "hidden");
        window.location.href = "game-lobby.html";
    }
    else{
        $("#errorMsg").css("visibility", "visible");
    }
}

$(document).ready(function(){
    $('#nameInput').onclick(function(){
        alert("hi");
    })
})

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
})


