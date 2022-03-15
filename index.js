var n = document.querySelectorAll(".drum").length
for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var ButtonInnerHTML = this.innerHTML
        makeSound(ButtonInnerHTML)
        buttonAnimation(ButtonInnerHTML);
        
    });

}


//Key Detection
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "j":
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "k":
            var tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;
        case "l":
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;
        default:console.log(ButtonInnerHTML)
            break;
    }

}

function buttonAnimation(currentKey){
    var activebutton = document.querySelector("."+ currentKey);
    activebutton.classList.add("pressed");

    setTimeout(function(){
        activebutton.classList.remove("pressed");
    }, 100);
}















// document.querySelectorAll("button")[1].addEventListener("click", function() {alert("I got clicked!");});
// document.querySelectorAll("button")[2].addEventListener("click", function() {alert("I got clicked!");});
// document.querySelectorAll("button")[3].addEventListener("click", function() {alert("I got clicked!");});
// document.querySelectorAll("button")[4].addEventListener("click", function() {alert("I got clicked!");});
// document.querySelectorAll("button")[5].addEventListener("click", function() {alert("I got clicked!");});
// document.querySelectorAll("button")[6].addEventListener("click", function() {alert("I got clicked!");});