var Spotify = require('node-spotify-api');
var keys = require("./key.js");
var axios = require("axios");

var spotify = new Spotify({
    id: "9c93719e1e2a4796ae048f76651b15d2",
    secret: "4eed9eddf464c93876e31daf55fa5b3"
});

var divider = "\n---------------------------------\n";

function Song() {
    this.findSong = function (songSearch) {

        spotify.request("https://api.spotify.com/v1/search?q=" + songSearch + "&type=track")
        .then(function (data) {  
            for (var i = 0; i < data.tracks.items.length; i++) {

                var songInfo = [
                    "\nSong: " + data.tracks.items[i].name,
                    "Artist: " + data.tracks.items[i].artists[0].name,
                    "Album: " + data.tracks.items[i].album.name,
                    "Preview the song at: " + data.tracks.items[i].external_urls.spotify
                ].join('\n\n')
                
                console.log(songInfo + divider);
           
            }
        });
    };
};


module.exports = Song;