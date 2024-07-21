function adult(e) {
  e.preventDefault();
  console.log(e);
  let jahr = document.querySelector(".alter").value;
  if (jahr >= 18) {
    document.querySelector(".ergebnis").innerHTML =
      "Ja, Du kannst Shisha rauchen";
  } else {
    document.querySelector(".ergebnis").innerHTML =
      "Du darfst noch nicht Shisha rauchen";
  }
}
