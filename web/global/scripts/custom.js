
// Read PicoBRCK api data
$(document).ready(function() {
    // main URL
    var mainUrl = "https://thingspeak.com/channels/148929/feeds.json?";

    // url parameters
    var urlParams = { result: 1000 , api_key : "9SWYV6S22XKL4C9X"}

    // success call back function
    var success = function (data) {

        // array list to hold weather data
        var dataList = [],
        tbl;

        for(var key in data)
        {
            //console.log(data[key]);
            if (data.hasOwnProperty(key))
            {
                // channel object
                var objChannel = data['channel'];
                // console.log(objChannel);

                // feeds object
                var objFeeds = data['feeds'];

                // get feeds data
                getFeedObj(objFeeds,dataList);

                // get channel data
                getChannelObj(objChannel);
            }
            break;
        }

        // if no items were returned then add a message to that effect
        if (dataList.length < 1)
        {
            dataList.push('<td>No results, try again!</td>');
        }

        // append table body
        $tbl = $('<tbody />').appendTo('.api-data');

        //append list items to table body
        $tbl.append(dataList);
    }

    // get json data
    function getJSON(mainUrl)
    {
        $.getJSON(mainUrl, urlParams, success);
    }

    // get data from channels object
    function  getChannelObj(objChannel)
    {
        for(prop in objChannel)
        {

            // data variables from API
            var channelID = objChannel.id;
            var channelName = objChannel.name;
            var createdDate = objChannel.created_at;
            var updatedDate = objChannel.updated_at;
            var lastFeedEntry = objChannel.last_entry_id;

            //channelArray.push();
        }

        // append data to ID tagged elements
        $( '#channel-id' ).append( channelID );
        $( '#channel-name' ).append( channelName );

    }

    // get data from feeds object
    function getFeedObj(objFeeds,dataList)
    {
        // loop through feeds object
        for(prop in objFeeds)
        {
            feedsArray = objFeeds[prop];

            // data variables from API
            var createAt = feedsArray.created_at;
            var entryId = feedsArray.entry_id;
            var pressure = feedsArray.field1;
            var relativeHumidity = feedsArray.field2;
            var temperature = feedsArray.field3;
            var dewPoint = feedsArray.field4;
            var voltage = feedsArray.field5;

            // creat row and cells to hold data
            dataList.push('<tr id="' + prop + '"><td id="created">' + entryId + '</td><td class="created">' + createAt + '</td><td class="pressure">' + pressure + '</td><td class="humdity">' + relativeHumidity + '</td><td class="temperature">' + temperature + '</td><td class="dewpoint">' + dewPoint + '</td><td class="voltage">' + voltage + '</td></tr>');
        }
        return dataList;
    }

    // wrap link tag to number circles
    function addLinks() {
        $( ".img-circle" ).wrap( "<a class='circle-link' href='https://thingspeak.com/channels/148929/' target='_blank'></a>" );
    }

    //addLinks();

    getJSON(mainUrl);
});
