let userClickedPattern = [];
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

const fadeTime = 150;

//Generates a random number between 0 and 3.
function nextSequence () {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(fadeTime).fadeIn(fadeTime);
    playSound(randomChosenColour);
}

$(".btn").click(function (event) {
    let userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
});

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}



//Add Animations to User Clicks
function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}


//Detects when a keyboard key has been pressed
$(document).keypress(function () {
    //You'll need a way to keep track of whether if the game has started
    // or not, so you only call nextSequence() on the first keypress.
    let level = 0;
    nextSequence ();
})

//Debug

// if(window.attachEvent) {
//     window.attachEvent('onload', yourFunctionName);
// } else {
//     if(window.onload) {
//         var curronload = window.onload;
//         var newonload = function(evt) {
//             curronload(evt);
//             nextSequence(evt);
//         };
//         window.onload = newonload;
//     } else {
//         window.onload = nextSequence;
//     }
// }