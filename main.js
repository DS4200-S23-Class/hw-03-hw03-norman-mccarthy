let lightMode = true;

// changes the page between light and dark mode
function buttonClick() {
    switch(lightMode) {
        case true:
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            document.getElementById("modeToggle").innerHTML="Light mode"
            lightMode = false;
            break;
        case false:
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            document.getElementById("modeToggle").innerHTML="Dark mode"
            lightMode = true;
            break;
        default: return; // should never get here
    }
}