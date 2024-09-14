let counterValue = 0;
const targetValue = 2011;
const incrementSpeed = 7;  

function updateCounter() {
    const counterElement = document.getElementById('counter');

    if (counterValue < targetValue) {
        counterValue += incrementSpeed;

        if (counterValue > targetValue) {
            counterValue = targetValue;
        }

        counterElement.textContent = Math.floor(counterValue);

        requestAnimationFrame(updateCounter);
    } else {
        counterElement.textContent = targetValue;
    }
}
updateCounter();
