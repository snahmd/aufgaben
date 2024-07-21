console.log("object");

document.getElementById("container").innerHTML = "<p>start of the element</p>";

function content() {
  document.getElementById("info").innerHTML =
    "<h1>Hello World</h1> <h2>How are you?</h2>";
}

content();

document.write("<p>end of the element</p>");
