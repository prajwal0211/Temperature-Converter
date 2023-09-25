const celciusInput = document.querySelector("#celcius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

let btn = document.querySelector('.btn button');

const roundNumber = number => Math.round(number * 100) / 100;

const updateTemperatureValues = () => {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = cTemp * (9/5) + 32;
    const kTemp = cTemp + 273.15;

    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
};

celciusInput.addEventListener('input', updateTemperatureValues);

const updateTemperatureValuesReverse = () => {
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp - 32) * (5/9) + 273.15;

    celciusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
};

fahrenheitInput.addEventListener('input', updateTemperatureValuesReverse);

const updateTemperatureValuesKelvin = () => {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = (kTemp - 273.15) * (9/5) + 32;

    celciusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
};

kelvinInput.addEventListener('input', updateTemperatureValuesKelvin);

btn.addEventListener('click', () => {
    celciusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
});