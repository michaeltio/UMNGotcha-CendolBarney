window.onload = function(){
    var newName = localStorage.getItem("nameGiven");
    $('#name').text(newName);
}




function homeBtn(){
    window.location.href = "main-menu.html"
}