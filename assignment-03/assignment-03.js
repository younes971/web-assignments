 function checkTriangle() {
  let a = parseFloat(prompt("Enter side a:"));
  let b = parseFloat(prompt("Enter side b:"));
  let c = parseFloat(prompt("Enter side c:"));

  let result = "";

  if (a === b && b === c) {
    result = "Equilateral (all sides are equal)";
  }
  else if (a === b || b === c || a === c) {
    result = "Isosceles (two sides are equal)";
  }
  else if (a !== b && b !== c && a !== c) {
    result = "Scalene (no sides are equal)";
  }
  else {
    result = "Not a valid triangle!";
  }

  document.getElementById("result").innerHTML = result;
}

