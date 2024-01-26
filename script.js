
const forecastBtn = document.querySelector('.forecast-btn');
const currentForecast = document.querySelector('.current-forecast');
const title = currentForecast.querySelector('h1');
const forecastP = currentForecast.querySelector('p');
const forecastTemplate = document.querySelector('#forecast-item');
const forecasts = document.querySelector('.forecasts');

forecastBtn.addEventListener('click', function() {

    const generatedValue = generateRandomValue(0, 6);
    
    let forecastText = "";

    if (generatedValue == 1) {
        forecastText = "Получите хорошую новость";
    } else if (generatedValue == 2){
        forecastText = "Узнаете нечто новое об окружающих вас людях";
    } else if (generatedValue == 3){
        forecastText = "Ваш труд будет плодотворным";
    } else if (generatedValue == 4){
        forecastText = "Все неоконченные дела будут завершены";
    }else if (generatedValue == 5){
        forecastText = "Все желания сбудутся";
    }
    
    title.textContent = forecastText;
    
    const percentValue = generateRandomValuePercent(0, 101);

    forecastP.textContent = `${percentValue}%`;

    currentForecast = makeforecastTemplate(forecastText, percentValue);
    forecasts.prepend(currentForecast);
});

function generateRandomValue(min, max) {
    const generatedValue = Math.floor(Math.random() * (max - min)) + min; 
    return generatedValue;
  }
  
  function generateRandomValuePercent(min, max) {
    const percentValue = Math.floor(Math.random() * (max - min)) + min; 
    return percentValue;
  }


  function makeforecastTemplate( title, percent) {
    const myForecast = forecastTemplate.content.cloneNode(true);
    
    myForecast.querySelector('h3').textContent = title;
    myForecast.querySelector('p').textContent = `${percent}%`;

    return myForecast;
}

