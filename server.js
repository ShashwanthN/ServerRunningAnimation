const express = require('express');
const app = express();

function hideCursor() {
    process.stdout.write("\x1B[?25l"); // Hide cursor
}

function showCursor() {
    process.stdout.write("\x1B[?25h"); // Show cursor
}

function animateProgress() {
    hideCursor(); // Hide cursor before animation starts
    var dots = ''; // Initialize dots as an empty string
    const message = "Currently listening on port 3000";
    var interval = setInterval(function() {
        process.stdout.clearLine(message.length);  // Clear the current line
        process.stdout.cursorTo(0); // Move cursor to the beginning of the line
        process.stdout.write(message + dots); // Write dots without new line
        dots += '.'; // Add a dot
        if (dots.length > 3) {
            dots = ''; // Reset dots after 3 dots
        }
    }, 800); // Repeat every 800ms ps:dont ask me why I chose 800 :o
    
}

app.listen(3000, function() {
    animateProgress(); // Start animation when the server starts
});
// Thanks for checking out my code
// Hope this helps you :-) Shashwanth Sivakumar N