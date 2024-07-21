function differenz() {
  console.log("jnsk");
  let firstYear = document.querySelector(".eAlter").value;
  console.log(firstYear);
  let secondYear = document.querySelector(".zAlter").value;
  console.log(secondYear);
  let differenz = secondYear - firstYear;
  document.querySelector(".ergebnis").innerHTML = `${differenz}`;
}
