function weather() {
  const ws = document.querySelector(".weatherStatements").value;
  console.log(ws);
  if (ws > 7) {
    document.querySelector(".ergebnis").innerHTML = "Super";
  } else if (ws > 5) {
    document.querySelector(".ergebnis").innerHTML = "Gut";
  } else if (ws > 2) {
    document.querySelector(".ergebnis").innerHTML = "Okay";
  } else {
    document.querySelector(".ergebnis").innerHTML = "Schlecht";
  }
}
