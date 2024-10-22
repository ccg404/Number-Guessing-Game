const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const result = document.getElementById("result");

let attempts = 0;
let guess;
let running = true;

guessButton.addEventListener("click", () => {
    guess = guessInput.value;
    console.log(guess);
    if(isNaN(guess)) {
        result.textContent = "Please enter a valid number";
    }
    else if(guess < minNum || guess > maxNum) {
        result.textContent = "Please enter a number within the range";
    }
    else{
        attempts++;
        if(guess < answer) {
            result.textContent = "Too low";
        }
        else if(guess > answer) {
            result.textContent = "Too high";
        }
        else{
            result.textContent = `You guessed the number in ${attempts} attempts, the answer was ${answer}`;
            running = false;
        }
    }
});

