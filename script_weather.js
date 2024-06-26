const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "";

weatherForm .addEventListener("submit", async event => {
    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Bitte Stadt eingeben!");
    }
});

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    console.log(response);

    if(!response.ok){
        throw new Error("Data konnte nicht ausgewertet werden");
    }

    return await response.json();
}

function displayWeatherInfo(data){
    console.log(data)
    const {name: city,
        main: {temp, humidity},
        weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";
    
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");
    const whatToWear = document.createElement("p");
    const wearEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`
    humidityDisplay.textContent = `Luftfeuchtigkeit: ${humidity}%`;
    weatherEmoji.textContent = getWeatherEmoji(id);
    whatToWear.textContent = "Was sollte ich heute anziehen?"
    wearEmoji.textContent = getWearEmoji(id); 

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    weatherEmoji.classList.add("weatherEmoji");
    whatToWear.classList.add("whatToWear")
    wearEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(weatherEmoji);
    card.appendChild(whatToWear);
    card.appendChild(wearEmoji);
}

function getWearEmoji(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "🏠";
        case (weatherId >= 300 && weatherId < 400):
            return "🧥👖🌂";
        case (weatherId >= 500 && weatherId < 600):
            return "🧥👖☂️";
        case (weatherId >= 600 && weatherId < 700):
            return "🧣🧥🧤👖";
        case (weatherId >= 700 && weatherId < 800):
            return "🕶️🧥👖";
        case (weatherId === 800):
            return "👕🩳";
        case (weatherId >= 801 && weatherId < 810):
            return "🧥👖";
    }
}

function getWeatherEmoji(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "☔";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
        default:
            return "❓";
    }
}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
