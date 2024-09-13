let counterValue = 0;
const targetValue = 2011;
const incrementSpeed = 7;  // Controls how much we increment per frame

function updateCounter() {
    const counterElement = document.getElementById('counter');

    if (counterValue < targetValue) {
        // Increase counter value faster by incrementing it by a larger amount
        counterValue += incrementSpeed;

        // Make sure we don't overshoot the target value
        if (counterValue > targetValue) {
            counterValue = targetValue;
        }

        // Update the displayed value
        counterElement.textContent = Math.floor(counterValue);

        // Request the next frame
        requestAnimationFrame(updateCounter);
    } else {
        // Ensure it ends exactly at 2011
        counterElement.textContent = targetValue;
    }
}

// Start the counter
updateCounter();
