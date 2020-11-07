function handleHamburguerMenu(){
    var header = document.getElementById("main-header");
    var menuOptions = document.getElementById("menu-options");
    var imgLogo = document.getElementById("leftTopLogo");

    if(menuOptions.style.display == "block"){
        menuOptions.style.display = "none";
        header.style.height = imgLogo.style.height
        header.style.backgroundColor = "rgba(0, 0, 0, 0)";
    } else {
        menuOptions.style.display = "block";
        header.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        if(window.screen.width <= 600){
            header.style.height = "300px";
        } else {
            header.style.height = "350px";
        }
    }
}