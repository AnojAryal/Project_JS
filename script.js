function greet() {
    const name = prompt('What is your name?');
    alert(`Hello, ${name}! Welcome to My Project!`);
}


window.onload = function() {
    greet();
}