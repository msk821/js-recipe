const figure = document.getElementById("figure")
//const circlebutton = document.getElementById("circle-button")
//const squarebutton = document.getElementById("square-button")
/*
circlebutton.onclick = function () {
  figure.classList.add("rounded")
}

squarebutton.onclic = function () {
  figure.classList.remove("rounded")
}
*/
/*
figure.onclick = function () {
  figure.classList.toggle("rounded")
}
*/
//発展問題1

figure.onmouseover = function () {
  figure.classList.toggle("rounded")
}

//発展問題2
/*
figure.onclick = function () {
  if (figure.classList.contains("square")) {
    figure.classList.add("rounded")
  } else if (figure.classList.contains("square", "rounded")) {
    figure.classList.remove("rounded")
    figure.classList.add("triangle")
  } else {
    figure.classList.add("square")
  }
}
*/
