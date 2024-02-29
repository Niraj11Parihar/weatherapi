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

    function fetchWeather(country, state, city) {
        let weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be65043bc12440c4cbe24a5249b7a8a7&units=metric`;

        $.ajax({
            url: weatherAPIURL,
            method: "GET",
            success: function (data) {
                cityName.text(city);
                humidityValue.data.humidity;
                windValue.text(data.wind_speed);
                weatherContent.find('.weather-img').attr('src', 'assets/images/' + data.weather_condition + '.png');
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
