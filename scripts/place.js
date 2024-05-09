
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return Math.round(windChill * 10) / 10; 
    } else {
        return 'N/A';
    }
}

const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

const lastModified = new Date(document.lastModified);
const lastModifiedDate = `${lastModified.getFullYear()}-${(lastModified.getMonth() + 1).toString().padStart(2, '0')}-${lastModified.getDate().toString().padStart(2, '0')}`;
document.getElementById('last-modified').textContent = lastModifiedDate;

document.getElementById('temperature').textContent = '25°C'; 
document.getElementById('wind-speed').textContent = '10 km/h'; 
document.getElementById('conditions').textContent = 'Sunny'; 
const windChill = calculateWindChill(25, 10); 
document.getElementById('wind-chill').textContent = windChill + '°C';

document.getElementById('area').textContent = '27750 sq km';
document.getElementById('capital').textContent = 'Port-au-Prince';
document.getElementById('population').textContent = '10,711,061';
document.getElementById('language').textContent = 'Creole, French';
document.getElementById('currency').textContent = 'Haitian gourde';
document.getElementById('time-zone').textContent = 'UTC-4';
document.getElementById('calling-code').textContent = '+509';

