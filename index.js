const apiKey = "2fcd83828c7a6dd5b3be29bc0b6fdd9c"
let lat = "41.825226"; 
let lon = "-71.418884";

const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon +'&units=imperial&appid='+ apiKey +'';











function createRain(){
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

    setTimeout(function() {
        rainContainer.remove();
      }, 6000);

      document.body.classList.add('blur1');
      setTimeout(function() {
        document.body.classList.remove('blur1');
      }, 6000);

    }

function createClouds(){
    document.body.classList.add('blur');
      setTimeout(function() {
        document.body.classList.remove('blur');
      }, 6000);
}

//reset
document.addEventListener("DOMContentLoaded", function() {
    var myElement = document.getElementById("myElement0");
    myElement.addEventListener("click", function() {
      location.reload(); // 페이지 새로고침
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var myElement = document.getElementById("myElement01");
    myElement.addEventListener("click", function() {
      location.reload(); // 페이지 새로고침
    });
  });


  // Night
  function changeBackgroundColor() {
    document.body.style.backgroundColor = "Black";
  }
  document.addEventListener("DOMContentLoaded", function() {
    var myElement = document.getElementById("myElement");
    myElement.addEventListener("click", changeBackgroundColor);
  });
  //노을

  function changeBackgroundColor1() {
    document.body.style.backgroundColor = "Red";
  }
  document.addEventListener("DOMContentLoaded", function() {
    var myElement = document.getElementById("myElement1");
    myElement.addEventListener("click", changeBackgroundColor1);
  });

  //노을 비 
  document.addEventListener("DOMContentLoaded", function() {
    var myElement = document.getElementById("myElement2");
    myElement.addEventListener("click", changeBackgroundColor1);
    myElement.addEventListener("click", createRain);

});

//day- clear
function changeBackgroundColor2() {
    document.body.style.backgroundColor = "White";
  }
  document.addEventListener("DOMContentLoaded", function() {
    var myElement = document.getElementById("myElement3");
    myElement.addEventListener("click", changeBackgroundColor2);
  });

//day - Rainy

  document.addEventListener("DOMContentLoaded", function() {
    var myElement = document.getElementById("myElement4");
    myElement.addEventListener("click", changeBackgroundColor2);
    myElement.addEventListener("click", createRain);

});

//dawn - cloudy
function changeBackgroundColor3() {
    document.body.style.backgroundColor = "rgb(69, 107, 221)";
  }
  document.addEventListener("DOMContentLoaded", function() {
    var myElement = document.getElementById("myElement5");
    myElement.addEventListener("click", changeBackgroundColor3);
    myElement.addEventListener("click", createClouds);
  });
//dawn - Rainy
  document.addEventListener("DOMContentLoaded", function() {
    var myElement = document.getElementById("myElement6");
    myElement.addEventListener("click", changeBackgroundColor3);
    myElement.addEventListener("click", createRain);
  });






// 시간대에 따른 배경색 변화


document.addEventListener("DOMContentLoaded", function() {
    setInterval(changeBackgroundColor, 12000); // 1분(60초)마다 배경색이 변경되도록 설정

    function changeBackgroundColor() {
      var now = new Date();
      var hours = now.getHours();

      if (hours >= 19 || hours < 5) {
        document.body.style.backgroundColor = "black";
      } else if (hours >= 5 && hours < 6) {
        var brightness = hours - 5; // 밝기를 계산합니다.
        var color = "rgb(" + Math.round(51 + 204 * brightness) + ", " + Math.round(51 + 204 * brightness) + ", " + Math.round(255 - 204 * brightness) + ")";
        document.body.style.backgroundColor = color;
      } else if (hours >= 6 && hours < 7) {
        var redness = hours - 6; // 빨간 색감을 계산합니다.
        var color = "rgb(255, " + Math.round(255 - 204 * redness) + ", " + Math.round(255 - 204 * redness) + ")";
        document.body.style.backgroundColor = color;
      } else if (hours >= 7 && hours < 18) {
        document.body.style.backgroundColor = "white";
      } else if (hours >= 18 && hours < 19) {
        var redness = hours - 18; // 빨간 색감을 계산합니다.
        var color = "rgb(255, " + Math.round(51 + 204 * redness) + ", " + Math.round(51 + 204 * redness) + ")";
        document.body.style.backgroundColor = color;
      }
    }
  });



  function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();

    // 시, 분, 초 추출
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // 시계 업데이트
    clock.textContent = `${hours}:${minutes}:${seconds}`;
  }

  // 1초마다 시계 업데이트 호출
  setInterval(updateClock, 1000);

  // 초기 로드 시 시계 업데이트 호출
  updateClock();




//날씨


fetch(url)
  .then(response => response.json())
  .then((data) => { console.log(data)
    const weather = data.weather[0].main;
    console.log(weather)
    if(weather === "Rain"|| weather === "" ){
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
    else if(weather === "Clear"){
        console.log("not bad")
        // document.querySelector('body').classList.add('blur');
    }else{

    }

  })

 window.addEventListener('load', getWeather);

