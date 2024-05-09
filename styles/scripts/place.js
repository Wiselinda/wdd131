// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return Math.round(windChill * 10) / 10; // Round to one decimal place
    } else {
        return 'N/A';
    }
}

// Get current year
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

// Get last modified date
const lastModified = new Date(document.lastModified);
const lastModifiedDate = `${lastModified.getFullYear()}-${(lastModified.getMonth() + 1).toString().padStart(2, '0')}-${lastModified.getDate().toString().padStart(2, '0')}`;
document.getElementById('last-modified').textContent = lastModifiedDate;

// Populate weather information
document.getElementById('temperature').textContent = '25°C'; // Example temperature
document.getElementById('wind-speed').textContent = '10 km/h'; // Example wind speed
document.getElementById('conditions').textContent = 'Sunny'; // Example conditions
const windChill = calculateWindChill(25, 10); // Example temperature and wind speed
document.getElementById('wind-chill').textContent = windChill + '°C';

// Populate data information
document.getElementById('country').textContent = 'Country'; // Example country
document.getElementById('city').textContent = 'City'; // Example city
document.getElementById('population').textContent = 'Population'; // Example population
document.getElementById('language').textContent = 'Language'; // Example language

