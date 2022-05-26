window.onload=( function() {//from w  ww  .  ja  va 2  s  .com
var widget = document.getElementsByClassName("price price--withTax");
widget[0].innerHTML = '<button id="mahbutton">Clicky</button>';
var w_btn = document.getElementById("mahbutton");
w_btn.addEventListener("click",
    function() {
        alert("sdf");
    }
);
    });
