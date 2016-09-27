// Read PicoBRCK api data
$(document).ready(function() {
    // main URL
    var mainUrl = "https://thingspeak.com/channels/148929/feeds/last.json?";

    // url parameters
    var urlParams = { api_key : "9SWYV6S22XKL4C9X"}
    
    // success call back function
    var success = function (data) {

        // array list to hold weather data
        var dataList = [],
        tbl;

        for(var key in data)
        {
            //console.log(data.created_at);
            // data variables from API
            var createAt = data.created_at;
            var entryId = data.entry_id;
            var pressure = data.field1;
            var relativeHumidity = data.field2;
            var temperature = data.field3;
            var dewPoint = data.field4;
            var voltage= data.field5;

            // creat array to store weather parameters
            var weatherParams = [temperature,pressure,relativeHumidity,dewPoint,voltage];
        }

        // append weather data
        appendData(weatherParams);

        //append date
        d = new Date(createAt);
        $('#weather-data-time').append(d.toString());

        // if no items were returned then add a message to that effect
        if (dataList.length < 1)
        {
            dataList.push('<td>No results, try again!</td>');
        }
    }

    // append data to circles
    function appendData(weatherParams) {
        // Array of element IDs
        var dataIDs =['temp','pressure','humidity','dew','voltage'];

        for (var index=0, paramsLen = weatherParams.length; index < paramsLen; index++) {

            //convert to integer and append to tags with IDs
            $( '#' + dataIDs[index] ).append( floatConverter( weatherParams[index] ) );

        }
    }

    // convert data to integer and remove leading zeros
    function intConverter(stringValue) {
        convertedInt = parseInt(stringValue, 10);
        return convertedInt;
    }

     // convert data to float
    function floatConverter(stringValue) {
        convertedFloat = parseFloat(stringValue);
        return convertedFloat;
    }

    // get json data
    function getJSON(mainUrl) {
        $.getJSON(mainUrl, urlParams, success);
    }

    getJSON(mainUrl);
});
