document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=' + apiKey;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const location = data.name;
            const description = data.weather[0].description;
            const temperature = data.main.temp + '°C';

            document.getElementById('location').textContent = location;
            document.getElementById('description').textContent = description;
            document.getElementById('temperature').textContent = temperature;

            // Optionally, update background based on weather description
            if (description.includes('sun')) {
                document.querySelector('.card').classList.add('sunny');
            } else if (description.includes('rain')) {
                document.querySelector('.card').classList.add('rainy');
            } else if (description.includes('cloud')) {
                document.querySelector('.card').classList.add('cloudy');
            } else if (description.includes('snow')) {
                document.querySelector('.card').classList.add('snowy');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});