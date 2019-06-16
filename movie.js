var axios = require("axios");

var divider = "\n---------------------------------\n";

function Movie() {
  this.findMovie = function (movieName) {

    var movieUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    
  axios.get(movieUrl).then(function (response) {

    var movieData = [
      "\nTitle: " + response.data.Title,
      "Year Released: " + response.data.Released,
      "IMDB Rating: " + response.data.imdbRating,
      "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value,
      "Country Produced: " + response.data.Country,
      "Language(s): " + response.data.Language,
      "Plot: " + response.data.Plot,
      "Actors: " + response.data.Actors
    ].join('\n\n')

    console.log(divider + movieData + divider);

  });
};
};

module.exports = Movie;