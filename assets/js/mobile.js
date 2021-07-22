// Selection de la ville et de la clé utilisateur
let cityName = 'Paris';
const apiKey = 'd244f6f1e1e7ca1106c0cf49338bb0c1';

// Gestion de l'icône selon le temps
const iconLocation = document.querySelector('.mobile_weather_icon');

// Affichage de la date du jour
let date = new Date();
const options = {
    year: "numeric",
    month: "long",
    day: "2-digit"
};
let todayDate = (date.toLocaleDateString("fr-FR", options));
myDate.textContent = todayDate;

// Affichage des 5 jours suivants
let date2 = new Date(Date.now());
let todayNumber = date2.getDay();
const todayDay = [
    'DIM',
    'LUN',
    'MAR',
    'MER',
    'JEU',
    'VEN',
    'SAM'
];

// Connexion à l'API d'OpenWeather
fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric&lang=fr`)
    .then(resp => resp.json())
    .then(data => {
        // Récupération et affichage de la météo en direct
        const icon = data.list[0].weather[0].icon;

        // Informations principales
        mobileCity.textContent = cityName;
        mobileWeather.textContent = data.list[0].weather[0].description;
        iconLocation.innerHTML = `<img class="weather_icon_img" src="./assets/icons/${icon}.png"></img>`;
        mobileTemp.textContent = Math.round(data.list[0].main.temp) + '°C';

        // Détails
        mobileWind.textContent = Math.round(data.list[0].wind.speed * 3.6) + ' km/h';
        mobileHumidity.textContent = data.list[0].main.humidity + ' %';
        mobileVisibility.textContent = data.list[0].visibility + ' m';
        mobilePressure.textContent = data.list[0].main.pressure + ' hPa';

        // Récupération et affichage des 5 prochain jours
        weekDayOne.textContent = todayDay[todayNumber];
        dayOne.innerHTML = `
            <img class="next_icon_img" src="./assets/icons/${data.list[8].weather[0].icon}.png">
            <span>${Math.round(data.list[8].main.temp)}°C</span>
        `;
        todayNumber < 6 ? todayNumber++ : todayNumber = 0;

        weekDayTwo.textContent = todayDay[todayNumber];
        dayTwo.innerHTML = `
            <img class="next_icon_img" src="./assets/icons/${data.list[16].weather[0].icon}.png">
            <span>${Math.round(data.list[16].main.temp)}°C</span>
        `;
        todayNumber < 6 ? todayNumber++ : todayNumber = 0;
        
        weekDayThree.textContent = todayDay[todayNumber];
        dayThree.innerHTML = `
            <img class="next_icon_img" src="./assets/icons/${data.list[24].weather[0].icon}.png">
            <span>${Math.round(data.list[24].main.temp)}°C</span>
        `;
        todayNumber < 6 ? todayNumber++ : todayNumber = 0;
        
        weekDayFour.textContent = todayDay[todayNumber];
        dayFour.innerHTML = `
            <img class="next_icon_img" src="./assets/icons/${data.list[32].weather[0].icon}.png">
            <span>${Math.round(data.list[32].main.temp)}°C</span>
        `;
        todayNumber < 6 ? todayNumber++ : todayNumber = 0;

        weekDayFive.textContent = todayDay[todayNumber];
        dayFive.innerHTML = `
            <img class="next_icon_img" src="./assets/icons/${data.list[39].weather[0].icon}.png">
            <span>${Math.round(data.list[39].main.temp)}°C</span>
        `;
    });

cityBtn.addEventListener('click', () => {

    citySelect.value != '' ? cityName = citySelect.value : cityName = 'Paris';

    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric&lang=fr`)
    .then(resp => resp.json())
    .then(data => {
        // Récupération et affichage de la météo en direct
        const icon = data.list[0].weather[0].icon;

        // Informations principales
        mobileCity.textContent = cityName;
        mobileWeather.textContent = data.list[0].weather[0].description;
        iconLocation.innerHTML = `<img class="weather_icon_img" src="./assets/icons/${icon}.png"></img>`;
        mobileTemp.textContent = Math.round(data.list[0].main.temp) + '°C';

        // Détails
        mobileWind.textContent = Math.round(data.list[0].wind.speed * 3.6) + ' km/h';
        mobileHumidity.textContent = data.list[0].main.humidity + ' %';
        mobileVisibility.textContent = data.list[0].visibility + ' m';
        mobilePressure.textContent = data.list[0].main.pressure + ' hPa';

        // Récupération et affichage des 5 prochain jours
        weekDayOne.textContent = todayDay[todayNumber];
        dayOne.innerHTML = `
            <img class="next_icon_img" src="./assets/icons/${data.list[8].weather[0].icon}.png">
            <span>${Math.round(data.list[8].main.temp)}°C</span>
        `;
        todayNumber < 6 ? todayNumber++ : todayNumber = 0;

        weekDayTwo.textContent = todayDay[todayNumber];
        dayTwo.innerHTML = `
            <img class="next_icon_img" src="./assets/icons/${data.list[16].weather[0].icon}.png">
            <span>${Math.round(data.list[16].main.temp)}°C</span>
        `;
        todayNumber < 6 ? todayNumber++ : todayNumber = 0;
        
        weekDayThree.textContent = todayDay[todayNumber];
        dayThree.innerHTML = `
            <img class="next_icon_img" src="./assets/icons/${data.list[24].weather[0].icon}.png">
            <span>${Math.round(data.list[24].main.temp)}°C</span>
        `;
        todayNumber < 6 ? todayNumber++ : todayNumber = 0;
        
        weekDayFour.textContent = todayDay[todayNumber];
        dayFour.innerHTML = `
            <img class="next_icon_img" src="./assets/icons/${data.list[32].weather[0].icon}.png">
            <span>${Math.round(data.list[32].main.temp)}°C</span>
        `;
        todayNumber < 6 ? todayNumber++ : todayNumber = 0;

        weekDayFive.textContent = todayDay[todayNumber];
        dayFive.innerHTML = `
            <img class="next_icon_img" src="./assets/icons/${data.list[39].weather[0].icon}.png">
            <span>${Math.round(data.list[39].main.temp)}°C</span>
        `;
    });
});