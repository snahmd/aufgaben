function adult() {
  let jahr = document.querySelector(".alter").value;
  if (jahr >= 18) {
    document.querySelector(".ergebnis").innerHTML = "Over 18";
  } else {
    document.querySelector(".ergebnis").innerHTML = "Under 18";
  }
}
