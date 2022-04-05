/**
 *  Map button's letter to the string audio file name
 */
function DrumSound(letter) {
    // We create a const that receives an object and each of its properties.
    // will be the values corresponding to our types
    const Users = {
        w: 'tom-1',
        a: 'tom-2',
        s: 'tom-3',
        d: 'tom-4',
        j: 'kick-bass',
        k: 'snare',
        l: 'crash',
    }
    return Users[letter] || Users.default
}

/**
 * Selects a button based on a letter
 * and change the style of the button
 */
function buttonAnimation(letter) {
    let buttonSelected = $("." + letter);
    buttonSelected.addClass("pressed");
}

/**
 * Handles when mouse is pressed down.
 * It will playe an audio file based on which letter button is pressed
 * and change the style of the button.
 */
function handleMouseDown() {
    // get the letter of the button pressed
    let letter = this.innerHTML
    activeDrum(letter);
}


/**
 * Handles when mouse is released
 * It will reset the css style of the button
 */
function handleMouseUp() {
    let letter = this.innerHTML;
    let buttonSelected = $("." + letter);
    buttonSelected.removeClass("pressed");
}


/**
 * Handles events when key is pressed
 * Will activate drum sound and button style
 */
function handleKeyPress(e) {
    let letter = e.key;
    activeDrum(letter);
}


/**
 * Handles events when key is released
 * It will reset the css style of the button
 */
function handleKeyUp(e) {
    let letter = e.key;

    let buttonSelected = $("." + letter);
    buttonSelected.removeClass("pressed");

    // same as:
    // let buttonSelected = document.querySelector("." + letter);
    // buttonSelected.classList.remove("pressed");
}

function activeDrum(letter) {
    let drumSound = DrumSound(letter);
    let audio = new Audio("sounds/" + drumSound + ".mp3 ");
    // play
    audio.play();
    // change css
    buttonAnimation(letter);
}


/**
 * Add event listener to all elements with drum class
 */

$(".drum").on("mousedown", handleMouseDown);
$(".drum").on("mouseup", handleMouseUp);
// $(".drum").toArray() // same as doucment.querySelectorAll(".drum")
//     .forEach(drum => {
//         // using function() allows us to do this.
//         drum.addEventListener("mousedown", handleMouseDown);
//         drum.addEventListener("mouseup", handleMouseUp);
//     });  

/**
 * Add event listener to document
 */
document.addEventListener("keydown", handleKeyPress);
document.addEventListener("keyup", handleKeyUp);