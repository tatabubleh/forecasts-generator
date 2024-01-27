
const forecastBtn = document.querySelector('.forecast-btn');
const currentForecast = document.querySelector('.current-forecast');
const title = currentForecast.querySelector('h1');
const forecastP = currentForecast.querySelector('p');
const forecastTemplate = document.querySelector('#forecast-item');
const forecasts = document.querySelector('.forecasts');

forecastBtn.addEventListener('click', function() {

    const generatedValue = generateRandomValue(0, 6);
    
    let forecastText = "";

    if (generatedValue == 0){
        forecastText = "Получите хорошую новость";
    } else if (generatedValue == 1){
        forecastText = "Узнаете нечто новое об окружающих вас людях";
    } else if (generatedValue == 2){
        forecastText = "Ваш труд будет плодотворным";
    } else if (generatedValue == 3){
        forecastText = "Все неоконченные дела будут завершены";
    }else if (generatedValue == 4){
        forecastText = "Все желания сбудутся";
    } else if (generatedValue == 5){
        forecastText = "В 2024 году вы закроете ипотеку";
    }
    
    title.textContent = forecastText;
    
    const percentValue = generateRandomValuePercent(0, 101);

    forecastP.textContent = `${percentValue}%`;

    const forecastResult = makeforecastTemplate(forecastText, percentValue);
    forecasts.prepend(forecastResult);
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

