const outputDiv = document.getElementById("output");

function sortArray(arr) {
    let sortedArr = arr.slice().sort((a, b) => a - b);
    return sortedArr;
}
const numbers = [10, 3, 7, 1, 9, 5];

console.log("Original Array:", numbers);
outputDiv.innerHTML += `<p>Original Array: [${numbers.join(', ')}]</p>`;

const sortedNumbers = sortArray(numbers);

console.log("Sorted Array:", sortedNumbers);
outputDiv.innerHTML += `<p>Sorted Array: [${sortedNumbers.join(', ')}]</p>`;
