var Spotify = require('node-spotify-api');
var keys = require("./key.js");
var axios = require("axios");

var spotify = new Spotify(keys.spotify);

var divider = "\n---------------------------------\n";

function Song() {
    this.findSong = function (songSearch) {

        spotify.search({
            type: 'track',
            query: songSearch
        }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log(data);
                
            for (var i = 0; i < feedback; i++) {

                var songInfo = [
                    "\nSong Name: " + songs[i].name,
                    "Artist(s): " + songs[i].artists[0].name,
                    "Album: " + songs[i].album.name,
                    "Preview song: " + songs[i].preview_url,
                    divider

                ].join('\n\n')
                
                console.log(songInfo + divider);
           
            }
        });
    };
};


module.exports = Song;