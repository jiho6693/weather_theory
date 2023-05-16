const apiKey = "2fcd83828c7a6dd5b3be29bc0b6fdd9c"
let lat = "41.825226"; 
let lon = "-71.418884";

const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon +'&units=imperial&appid='+ apiKey +'';

  // 비 생성
  

//   document.addEventListener("DOMContentLoaded", function () {
    
//   });
//노을
document.addEventListener("DOMContentLoaded", function() {
    setInterval(changeBackgroundColor, 600); // 1분(60초)마다 배경색이 변경되도록 설정

    function changeBackgroundColor() {
      var now = new Date();
      var hours = now.getHours();

      // 아침 6시부터 점차 밝아지고, 해질 시간인 7시에 다시 노을색으로 되돌아갑니다.
      if (hours >= 6 && hours < 19) {
        var brightness = (hours - 6) / (19 - 6); // 밝기를 계산합니다.
        var color = "rgb(" + Math.round(255 * brightness) + ", " + Math.round(51 * brightness) + ", 0)";
        document.body.style.backgroundColor = color;
      } else {
        document.body.style.backgroundColor = "rgb(255, 51, 0)"; // 노을색으로 설정
      }
    }
  });







//날씨


fetch(url)
  .then(response => response.json())
  .then((data) => { console.log(data)
    const weather = data.weather[0].main;
    console.log(weather)
    if(weather === "Rain"|| weather === "Clouds" ){
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

    document.body.appendChild(rainContainer);
        

           document.querySelector('body').classList.add('blur1');
    } 
    else if(weather === "Clouds"|| weather === "B" ){
        

         document.querySelector('body').classList.add('blur');
    }
    else {
        console.log("not bad")
        // document.querySelector('body').classList.add('blur');
    }

  })

 window.addEventListener('load', getWeather);