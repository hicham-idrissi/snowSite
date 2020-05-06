var clik = document.getElementById("logo"),
  put = document.getElementById("inp"),
  change = document.getElementById("changement");

clik.onclick = function () {
  document.getElementById("titre").innerHTML = "This a title of the page";
};
put.onkeydown = function () {
  alert("Written Your Email Capitaly");
};
