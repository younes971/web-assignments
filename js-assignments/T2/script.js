let numbers = [];
        let outputDiv = document.getElementById("output");

        for (let i = 1; i <= 5; i++) {
            let num = Number(prompt(`Enter Number ${i}:`));
            numbers.push(num);
        }

        outputDiv.innerHTML += `Numbers: [${numbers.join(', ')}]<br>`;

        let searchNum = Number(prompt("Enter a Number to Search:"));
        if (numbers.includes(searchNum)) {
            outputDiv.innerHTML += `Number ${searchNum} is found in the array.<br>`;
        } else {
            outputDiv.innerHTML += `Number ${searchNum} is not found in the array.<br>`;
        }

        numbers.pop();
        outputDiv.innerHTML += `Updated Numbers: [${numbers.join(', ')}]<br>`;

        numbers.sort((a, b) => a - b);
        outputDiv.innerHTML += `Sorted Numbers: [${numbers.join(', ')}]<br>`;
