function openFilm(namaFilm) {
  var i;
  var x = document.getElementsByClassName("film");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(namaFilm).style.display = "block";
}
