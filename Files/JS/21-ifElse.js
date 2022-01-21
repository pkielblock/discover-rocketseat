let temperature = 38;
let highTemperature = temperature >= 37.5;
let mediumTemperature = temperature < 37.5 && temperature >= 37.0;

if (highTemperature) {
    console.log('High Fever');
} else if (mediumTemperature) {
    console.log('Medium Fever');
} else {
    console.log('Healthy');
}