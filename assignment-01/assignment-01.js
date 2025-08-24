ECHO is on.
function convertTemperature() {
  let celsius = prompt("Enter temperature in Celsius:");
  if (celsius === null) return; 
  celsius = parseFloat(celsius);
  if (isNaN(celsius)) {
    alert("Enter a number!");
    return;
  }

  const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;

  document.getElementById("results").innerHTML =
    "Celsius: " + celsius + " °C<br>" +
    "Fahrenheit: " + fahrenheit.toFixed(2) + " °F<br>" +
    "Kelvin: " + kelvin.toFixed(2) + " K";
}
