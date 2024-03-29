$(document).ready(function () {
    let apikey = "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==";
    let countryDropdown = $('#country-dropdown');
    let stateDropdown = $('#state-dropdown');
    let cityDropdown = $('#city-dropdown');
    let submitButton = $('#submit-button');
    let weatherContent = $('.weather-content');
    let cityName = $('.city-name');
    let humidityValue = $('.humidity-value');
    let windValue = $('.wind-value');
    let temp = $('.temp');

    function fetchWeather(country, state, city) {
        let weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be65043bc12440c4cbe24a5249b7a8a7&units=metric`;

        $.ajax({
            url: weatherAPIURL,
            method: "GET",
            success: function (data) {
                cityName.text(city);
                temp.text(data.main.temp + ' °C');
                humidityValue.text(data.main.humidity + '%');
                windValue.text(data.wind.speed + ' Km/Hr');

                let weatherCode = data.weather[0].id;
                let weatherImgSrc = "";

                if (weatherCode >= 200 && weatherCode < 300) {
                    weatherImgSrc = "assets/images/drizzle.png";
                } else if (weatherCode >= 300 && weatherCode < 400) {
                    // Drizzle
                    weatherImgSrc = "assets/images/mist.png";
                } else if (weatherCode >= 500 && weatherCode < 600) {
                    // Rain
                    weatherImgSrc = "assets/images/rain.png";
                } else if (weatherCode >= 600 && weatherCode < 700) {
                    // Snow
                    weatherImgSrc = "assets/images/snow.png";
                } else if (weatherCode >= 700 && weatherCode < 800) {
                    // Atmosphere
                    weatherImgSrc = "assets/images/clear.png";
                } else if (weatherCode === 800) {
                    // Clear
                    weatherImgSrc = "assets/images/mist.png";
                } else if (weatherCode > 800 && weatherCode < 900) {
                    // Clouds
                    weatherImgSrc = "assets/images/clouds.png";
                } else {
                    // Default image
                    // weatherImgSrc = "assets/images/clear.png";
                }

                $('.weather-img').attr('src', weatherImgSrc);

                weatherContent.show();
            },
            error: function (error) {
                console.error('Error fetching weather data:', error);
            }
        });
    }

    $.ajax({
        url: "https://api.countrystatecity.in/v1/countries",
        method: "GET",
        headers: {
            "X-CSCAPI-KEY": apikey
        },
        success: function (data) {
            countryDropdown.empty().append('<option value="">Select Country</option>');
            data.forEach(function (element) {
                countryDropdown.append(`<option value="${element.iso2}">${element.name}</option>`);
            });
        },
        error: function (error) {
            console.error('Error fetching countries:', error);
        }
    });

    countryDropdown.change(function () {
        let country = $(this).val();
        stateDropdown.empty().append('<option value="">Select State</option>');
        cityDropdown.empty().append('<option value="">Select City</option>');

        $.ajax({
            url: `https://api.countrystatecity.in/v1/countries/${country}/states`,
            method: "GET",
            headers: {
                "X-CSCAPI-KEY": apikey
            },
            success: function (data) {
                data.forEach(function (state) {
                    stateDropdown.append(`<option value="${state.iso2}">${state.name}</option>`);
                });
            },
            error: function (error) {
                console.error('Error fetching states:', error);
            }
        });
    });

    stateDropdown.change(function () {
        let country = countryDropdown.val();
        let state = $(this).val();
        cityDropdown.empty().append('<option value="">Select City</option>');

        $.ajax({
            url: `https://api.countrystatecity.in/v1/countries/${country}/states/${state}/cities`,
            method: "GET",
            headers: {
                "X-CSCAPI-KEY": apikey
            },
            success: function (data) {
                data.forEach(function (city) {
                    cityDropdown.append(`<option value="${city.name}">${city.name}</option>`);
                });
            },
            error: function (error) {
                console.error('Error fetching cities:', error);
            }
        });
    });

    submitButton.click(function () {
        let country = countryDropdown.val();
        let state = stateDropdown.val();
        let city = cityDropdown.val();

        if (country && state && city) {
            fetchWeather(country, state, city);
        } else {
            console.error('Please select a country, state, and city.');
        }
    });
});
