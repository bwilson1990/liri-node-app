require("dotenv").config();

var Movie = require("./movie.js");
var Song = require("./song.js");
var Shows = require("./shows.js");

var movie = new Movie();
var song = new Song();
var show = new Shows();

var search = process.argv[2];
var movieInput = process.argv.slice(3).join(" ");
var songInput = process.argv.slice(3).join(" ");
var showInput = process.argv.slice(3).join(" ");

if (search === "movie-this") {
  movie.findMovie(movieInput);
} 
else if (search === "spotify-this-song") {
  song.findSong(songInput);
}
else if (search === "concert-this") {
  show.findshow(showInput);
}

// > node liri.js do-what-it-says

// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// * It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// * Edit the text in random.txt to test out the feature for movie-this and concert-this.

