function init() {
  var pinr = document.getElementById("pin").value;
  var numr = (20 + (Math.floor((Math.random() * 180))));
  $.get("https://kahoot-michaeldg3.c9users.io", { pin: pinr, num: numr, type: "chinese" }, function(data){ retData(data); });
}

function retData(data) {
  console.log(data);
}

function background() {
  var element = document.getElementsByTagName("BODY")[0];
  element.style.backgroundColor = ("#" + Math.floor(Math.random() * 16777215).toString(16));
  setInterval(function(){
    element.style.backgroundColor = ("#" + Math.floor(Math.random() * 16777215).toString(16));
  }, 3000);
}

window.onload = background;
