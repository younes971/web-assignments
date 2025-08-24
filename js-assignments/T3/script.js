const outputDiv = document.getElementById("output");
let numbers = [];

while (true) {
    let input = prompt("Enter a number (or 'done' to finish):");
    if (input.toLowerCase() === 'done') {
        break;
    }
    let num = Number(input);
    if (!isNaN(num)) {
        numbers.push(num);
    } else {
        alert("Invalid input. Please enter a number or 'done'.");
    }
}

let evenNumbers = [];
for (let num of numbers) {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    }
}

if (evenNumbers.length > 0) {
    outputDiv.innerHTML = `<p>Even Numbers: ${evenNumbers.join(', ')}</p>`;
} else {
    outputDiv.innerHTML = `<p>Even Numbers: None</p>`;
}

outputDiv.innerHTML += `<p>Program finished.</p>`;
