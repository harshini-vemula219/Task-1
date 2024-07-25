document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guess');
    const submitBtn = document.getElementById('submitBtn');
    const restartBtn = document.getElementById('restartBtn');
    const message = document.getElementById('message');
    const attemptsSpan = document.getElementById('attempts');

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    submitBtn.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value);
        attempts++;
        attemptsSpan.textContent = attempts;

        if (userGuess === randomNumber) {
            message.textContent = `Congratulations! You guessed it right in ${attempts} attempts.`;
            message.style.color = 'green';
            guessInput.disabled = true;
            submitBtn.disabled = true;
        } else if (userGuess < randomNumber) {
            message.textContent = 'Too low! Try again.';
            message.style.color = 'red';
        } else {
            message.textContent = 'Too high! Try again.';
            message.style.color = 'red';
        }
    });

    restartBtn.addEventListener('click', () => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        attemptsSpan.textContent = attempts;
        guessInput.value = '';
        guessInput.disabled = false;
        submitBtn.disabled = false;
        message.textContent = '';
        message.style.color = 'black';
    });
});
