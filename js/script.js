function heure() {
  var date = new Date();
  var heure = date.getHours();
  if( heure > 14 ) {
    document.getElementById("body").className = "nuit";
  }
  if (heure < 14) {
    document.getElementById("body").className = "jour";
  }
};
heure();