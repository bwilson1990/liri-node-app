var axios = require("axios");
var moment = require("moment")

var divider = "\n---------------------------------\n";

function Concert() {
    this.findshow = function (artist) {

        var bandsURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

        axios.get(bandsURL).then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                var concertData = [
                    "\nVenue: " + response.data[i].venue.name,
                    "Venue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country,
                    "Date: " + moment(response.data[i].datetime).format("MM-DD-YYYY")
                ].join('\n\n')
                
                console.log(concertData + divider);
            }
        });
    };
};

module.exports = Concert;