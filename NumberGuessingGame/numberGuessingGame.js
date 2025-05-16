// This is a simple number guessing game where the user has to guess a number between 1 and 100.
import { question } from 'readline-sync';
"use strict";

function numberGuessingGame () { 
    const min = 1;
    const max = 100;
    let answer;
    const random = Math.floor(Math.random() * ( max - min + 1)) + min;

    for ( let i = 0; i < 5; i++ ) {
    console.log("Please choose a number from 1 to 100: ");
    const input = question("Your guess: ");
    answer = parseInt(input);

    if ( isNaN(answer) || answer < min || answer > max ) {
        console.log("Invalid input. Please enter a number between 1 and 100.");
        continue;
}

    if ( answer > random ) {
        console.log("it's too high");
    } else if ( answer < random ) {
        console.log("it's too low");
    } else { 
        console.log("You Guessed!!!!");
        break;
    }
}

    console.log("The number was: " + random);
    if ( answer !== random ) {
        console.log("You lost the game");
    } else {
        console.log("You won the game");
    }
    console.log("Game Over");
    console.log("Thanks for playing!");
}

numberGuessingGame();