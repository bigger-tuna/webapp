// Read PicoBRCK api data
$(document).ready(function() {

    // Variables
    // create array for x and y axis values

    // x axis
    var timeList = []; // x axis

    // y axis
    var tempList = [];
    var pressureList = [];
    var humidityList = [];
    var dewList = [];
    var voltageList = [];

    // chart ID selectors
    var chartTempID = "weather-chart-temp";
    var chartPressureID = "weather-chart-pressure";
    var chartHumidityID = "weather-chart-humidity";
    var chartDewID = "weather-chart-dew";
    var chartVoltageID = "weather-chart-voltage";

    // general variable for chart selector ID
    var chartID;

    // chart labels
    var tempLabel = "Temperature";
    var pressureLabel = "Pressure";
    var humidityLabel = "Humidity";
    var dewLabel = "Dew Point";
    var voltageLabel = "Voltage";

    // main URL
    var mainUrl = "https://thingspeak.com/channels/148929/feeds.json?";

    // url parameters
    var urlParams = { result: 1000 , api_key : "9SWYV6S22XKL4C9X"};

    $( "#weather-chart-temp" ).hide();
    $( "#weather-chart-pressure" ).hide();
    $( "#weather-chart-dew" ).hide();
    $( "#weather-chart-humidity" ).hide();
    $( "#weather-chart-voltage" ).hide();

    // pop up
    $( "#tempChart" ).on( "click", function(e) {

        // Prevents the default action to be triggered.
        e.preventDefault();

        $('#weather-chart-temp').bPopup({
             modalColor: 'black',
             positionStyle: 'fixed'
        });

        //getJSON(mainUrl);

    })

    $( "#pressureChart" ).on( "click", function(e) {

        // Prevents the default action to be triggered.
        e.preventDefault();

        $('#weather-chart-pressure').bPopup({
             modalColor: 'black',
             positionStyle: 'fixed'
        });

        //getJSON(mainUrl);

    })

    $( "#dewChart" ).on( "click", function(e) {

        // Prevents the default action to be triggered.
        e.preventDefault();

        $('#weather-chart-dew').bPopup({
             modalColor: 'black',
             positionStyle: 'fixed'
        });

        //getJSON(mainUrl);

    })

    $( "#humidityChart" ).on( "click", function(e) {

        // Prevents the default action to be triggered.
        e.preventDefault();

        $('#weather-chart-humidity').bPopup({
             modalColor: 'black',
             positionStyle: 'fixed'
        });

        //getJSON(mainUrl);

    })

    $( "#voltageChart" ).on( "click", function(e) {

        // Prevents the default action to be triggered.
        e.preventDefault();

        $('#weather-chart-voltage').bPopup({
             modalColor: 'black',
             positionStyle: 'fixed'
        });

        //getJSON(mainUrl);

    })

    // get json data
    function getJSON(mainUrl)
    {
        //$.getJSON(mainUrl, urlParams, success);
        $.getJSON(mainUrl, urlParams, function(data){
            for(var key in data)
            {
                //console.log(data[key]);
                if (data.hasOwnProperty(key))
                {
                    // feeds object
                    var objFeeds = data['feeds'];
                    getWeatherData(objFeeds);
                }
                break;
            }
        });
    }

    // get data from feeds object
    function getWeatherData(objFeeds)
    {
        // loop through feeds object
        for(prop in objFeeds)
        {
            feedsArray = objFeeds[prop];

            // data variables from API
            var createAt = feedsArray.created_at;
            //var entryId = feedsArray.entry_id;
            var pressure = feedsArray.field1;
            var relativeHumidity = feedsArray.field2;
            var temperature = feedsArray.field3;
            var dewPoint = feedsArray.field4;
            var voltage = feedsArray.field5;

            //convert to readable date
            d = new Date(createAt);
            createAt = d.toLocaleTimeString();
            //createAt = createAt.substring(0, createAt.length-3); // Remove EAT

            // push values collected by for loop to arrays
            tempList.push(temperature);
            timeList.push(createAt);
            pressureList.push(pressure);
            humidityList.push(relativeHumidity);
            dewList.push(dewPoint);
            voltageList.push(voltage);
        }

        var weatherData = {'temp':tempList,
                            'time':timeList,
                            'pressure':pressureList,
                            'humidity':humidityList,
                            'dew':dewList,
                            'voltage':voltageList
        };

        //console.log(weatherData);
        //return weatherData;

        // draw the charts
        drawChart(timeList, tempList, chartTempID, tempLabel, tempLabel);
        drawChart(timeList, pressureList, chartPressureID, pressureLabel,pressureLabel);
        drawChart(timeList, humidityList, chartHumidityID, humidityLabel,humidityLabel);
        drawChart(timeList, dewList, chartDewID, dewLabel,dewLabel);
        drawChart(timeList, voltageList, chartVoltageID, voltageLabel,voltageLabel);
    }

    // draw chart

    function drawChart(xValues, yValues, chartIDSelector, chartLabel, titleText) {

        var picoChart = document.getElementById(chartIDSelector);

        var data = {
            labels: xValues,
            datasets: [
                {
                    label: chartLabel,
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: yValues,
                    spanGaps: false,
                }
            ]
        };

        var options = {
            hover: {
                // Overrides the global setting
                mode: 'label'
            },
            title: {
                display: true,
                text: titleText
            },
            maintainAspectRatio: true,
            responsive: true
        };

        var myChart = new Chart(picoChart,{
            type: 'line',
            data: data,
            options: options
        });
    }

    getJSON(mainUrl);
});
