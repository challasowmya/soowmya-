document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'e678ca1a9d8a9256ba92991a5340064e';  // Replace with your OpenWeatherMap API key
    const city = 'Rajahmundry';  // You can replace this with any city

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city').innerText = data.name;
            document.getElementById('description').innerText = data.weather[0].description;
            document.getElementById('temp-value').innerText = data.main.temp;
            document.getElementById('humidity-value').innerText = data.main.humidity;
        })
        .catch(error => console.log('Error:', error));
});
