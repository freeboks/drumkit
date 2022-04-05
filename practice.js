// alert("hello");


// step 1: test handle click
// add event listener to this button
// button is the subject ( in this case only the first button is selected)
// 1) listen for an event, 2) what to do (function) when the event happen
document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
    alert("I got click");
}