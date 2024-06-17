// .................................. Question # 1 ........................................................
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.
function fetchGreeting() {
    setTimeout(function () {
        console.log("Tikka Party.");
    }, 2000);
    console.log("Break Fast With Halwa Poori");
}
fetchGreeting();
