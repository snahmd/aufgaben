function alter() {
  let jahr = document.querySelector(".gJahre").value;
  console.log(jahr);
  let jetzt = new Date();
  console.log(jetzt);
  let alter = jetzt.getFullYear() - jahr;
  console.log(alter);
  document.querySelector(".ergebnis").innerHTML = `Du bist ${alter} Jahre alt.`;
}
