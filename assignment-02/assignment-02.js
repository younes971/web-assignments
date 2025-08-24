ECHO is on.
function calculateDistance() {
  let x1 = parseFloat(prompt("Enter x1:"));
  let y1 = parseFloat(prompt("Enter y1:"));
  let x2 = parseFloat(prompt("Enter x2:"));
  let y2 = parseFloat(prompt("Enter y2:"));

  let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  document.getElementById("result").innerHTML =
    "Distance = " + distance.toFixed(2);
}
