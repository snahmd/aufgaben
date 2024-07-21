function onPoint(event) {
  let result = event.target.value;
  document.querySelector(".puanlar").innerHTML = `Luftqualität: ${result}`;
  console.log("asd");
  if (result <= 50) {
    console.log("jekcdj");
    document.querySelector(".ersteInfo").innerHTML =
      "Level of health concern:  Good";
    document.querySelector(".zweiteInfo").innerHTML =
      "Level of health effect: Little or no risk";
    document.querySelector("body").style.backgroundColor = "green";
  } else if (result <= 100) {
    console.log("lll");
    document.querySelector(".ersteInfo").innerHTML =
      "Level of health concern:  Moderate ";
    document.querySelector(".zweiteInfo").innerHTML =
      "Level of health effect: Acceptable quality ";
    document.querySelector("body").style.backgroundColor = "yellow";
  } else {
    console.log("pppp");
    document.querySelector(".ersteInfo").innerHTML =
      "Level of health concern:  Unhealthy for sensitive groups";
    document.querySelector(".zweiteInfo").innerHTML =
      "Level of health effect: Generable publics not likely affected";
    document.querySelector("body").style.backgroundColor = "orange";
  }
}
// document.querySelector(".puan").value = 0;
