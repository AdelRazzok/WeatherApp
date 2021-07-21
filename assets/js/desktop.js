const city = document.getElementById('city');
const myBtn =  document.getElementById('myBtn');

myBtn.addEventListener('click', () => {
    const apiKey = 'd244f6f1e1e7ca1106c0cf49338bb0c1';

    if (city.value != '') {
        let cityName = city.value;
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=fr`)
            .then(resp => resp.json())
            .then(data => {
                let temp = Math.round(data.main.temp);

                inputCity.textContent = 'Ville : ' + cityName;
                inputTemp.textContent = 'Température : ' + temp + ' °C';
                inputWeather.textContent = 'Ciel : tkt';
            })
    } else {
        console.log('Veuillez entrer une ville.');
    }
});