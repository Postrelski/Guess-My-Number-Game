'use strict';

// // with JS we can select html items just like we do with CSS
// // use console.log to view what you a selecting
// // simple DOM manipulation
// // 'textContet' allow us to read the text of the elemet
// console.log(document.querySelector('.message').textContent);

// // here we are changing the text content of the html element with the class "message"
// document.querySelector('.message').textContent = 'Correct Number!'

// // now the console prints the updated text content
// console.log(document.querySelector('.message').textContent);

// // changing the text content of other html elements
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 8; 

// // this will print the value of the html element containing class 'guess'
// // we can easily change the value of an input element like this
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);



















// Math.random() gives a num 0 -> 1
// Math.trunc removes the decimal
let number = Math.trunc(Math.random() * 20 + 1);
console.log("secret number = " + number);

let score = 20;
let highScore = 0;

// refractoring the code
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}


// this is how we create a function that requires a 'click' input
// here we pass a function into the addEventListener method
// the function does not requre a name or variable assignment
document.querySelector('.check').addEventListener('click', function () {

    // convert this to a number because we will compare it to a number
    // it is a string by default
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when there is NO input
    if (!guess) {

        if(score > 1) {
            // document.querySelector('.message').textContent = 'Please, enter a number.';
            displayMessage("Please, Enter a number");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage("You Lost!")
            document.querySelector('.score').textContent = 0;
        }
        
    // when guess is correct number
    } else if (guess == number) {

        displayMessage('You entered: ' + guess + '\n CONGRATS!!!');
        document.querySelector('.number').textContent = number;

        // only the highest score will be recorded.
        highScore = Math.max(highScore, score);
        document.querySelector('.label-highscore').textContent = "🥇 Highscore: " + highScore;

        // we can access css properties by using '.style' property
        // and then the css property like ".width"
        document.querySelector('body').style.backgroundColor = "limegreen";
        document.querySelector('.number').style.width = "30rem"


    // when guess is either too high or too low
    } else if (guess !== number) {

        if(score > 1) {

            // nice use of ternary operator
            displayMessage(guess > number ? 'Too high' : 'Too Low');
            score--;
            document.querySelector('.score').textContent = score;


        } else {
            displayMessage('You Lost!');
            document.querySelector('.score').textContent = 0;
        }
    }
}) 


// resets the game if the "again" button is clicked
document.querySelector('.again').addEventListener('click', function () {
    displayMessage('Start guessing...'); 
    document.querySelector('.score').textContent = 20;
    score = 20;
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').textContent = "?";
    number = Math.trunc(Math.random() * 20 + 1);
    console.log("new secret number = " + number);
    document.querySelector('.guess').value = "";
    document.querySelector('.number').style.width = "15rem"
})































// less efficient way of determining too low or too high


    //     // guess too high
    // } else if (guess > number) {

    //     if(score > 1) {
    //         document.querySelector('.message').textContent = 'Too high';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You Lost!';
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     // guess too low
    // } else if (guess < number) {

    //     if(score > 1) {
    //         document.querySelector('.message').textContent = 'Too low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You Lost!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }