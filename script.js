document.querySelector(".theme-btn").addEventListener("click", function () {
  document.querySelector(".theme").classList.toggle("dark");
  if (document.querySelector(".theme").innerHTML === "화이트모드") {
    document.querySelector(".theme").innerHTML = "다크모드";
  } else {
    document.querySelector(".theme").innerHTML = "화이트모드";
  }
});
