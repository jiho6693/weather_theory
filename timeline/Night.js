//background
document.body.style.backgroundColor = "black";


//rain
var rainContainer = document.createElement("div");
rainContainer.id = "rain";
for (var i = 0; i < 60; i++) {
  var drop = document.createElement("div");
  drop.className = "drop";
  drop.style.left = Math.random() * 100 + "%";
  drop.style.animationDuration = (1+ Math.random() * 2) + "s";
  rainContainer.appendChild(drop);
}

document.querySelector('body').classList.add('blur1');

// Cloudy


document.querySelector('body').classList.add('blur');




//날씨


