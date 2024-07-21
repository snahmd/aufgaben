function getDifferent(e) {
  e.preventDefault();
  let inputNumber = document.querySelector("#number").value;
  console.log(inputNumber);
  let different = Number(inputNumber) - 27;
  console.log(different);
  if (Number(inputNumber) > 27) {
    result = different * 2;
    console.log(result);
  }
}
