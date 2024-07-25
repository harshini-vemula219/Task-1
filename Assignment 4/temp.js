document.addEventListener('DOMContentLoaded', () => {
    const convertBtn = document.getElementById('convertBtn');
    const result = document.getElementById('result');

    convertBtn.addEventListener('click', () => {
        const temperature = parseFloat(document.getElementById('temperature').value);
        const unit = document.getElementById('unit').value;

        if (isNaN(temperature)) {
            alert('Please enter a valid temperature');
            return;
        }

        let convertedTemperature;

        if (unit === 'C') {
            convertedTemperature = (temperature * 9/5) + 32;
            result.textContent = `${temperature}°C is equal to ${convertedTemperature.toFixed(2)}°F`;
        } else {
            convertedTemperature = (temperature - 32) * 5/9;
            result.textContent = `${temperature}°F is equal to ${convertedTemperature.toFixed(2)}°C`;
        }
    });
});
