// Get display element
const display = document.getElementById('display');

// Add event listeners to buttons
const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (button.textContent === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (button.textContent === 'C') {
            display.value = '';
        } else {
            display.value += button.textContent;
        }
    });
});
