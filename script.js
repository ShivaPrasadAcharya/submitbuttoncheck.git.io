
function submitAnswer() {
  var radios = document.getElementsByName("choice");
  var result = document.getElementById("result");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      if (radios[i].value === "A") {
        result.innerHTML = "Correct!";
        result.style.color = "green";
        return;
      } else {
        result.innerHTML = "Incorrect";
        result.style.color = "red";
        return;
      }
    }
  }
  result.innerHTML = "Please select an answer";
  result.style.color = "black";
}

/*script of अधिवक्तामृत/
