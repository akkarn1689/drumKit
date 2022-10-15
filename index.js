// to detect mouse click on the buttons
var n = document.querySelectorAll(".drum").length; // number of drums
for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}


// to detect button pressed on keyboard
// we have used 'keydown' and not 'keypress' as the later responds only to character keys( it also reports characters as their ascii codes)
document.addEventListener("keydown", function(event) {
    makeSound(event.key);

    buttonAnimation(event.key);
});


// To actually play sound
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}


function buttonAnimation(currentKey) {

    document.querySelector("." + currentKey).classList.add("pressed");

    setTimeout(function() {
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100);

}
