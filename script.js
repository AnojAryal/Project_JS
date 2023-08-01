function greet() {
    const name = prompt('What is your name?');
    alert(`Hello, ${name}! Welcome to My Project!`);
}

// Call the greet function when the page loads
window.onload = function() {
    greet();
}
