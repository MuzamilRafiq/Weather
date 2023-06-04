document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.getElementsByClassName("names");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        var cityName = this.innerHTML;
        debugger
        window.location.href = "/index.html?city=" + encodeURIComponent(cityName);
      });
    }
  });