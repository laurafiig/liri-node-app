//read object from keys file
var keys = require('./keys');

module.exports.keys = keys;

//place keys in variables
var consumer_key = keys.twitterKeys.consumer_key
var consumer_secret = keys.twitterKeys.consumer_secret
var access_token_key = keys.twitterKeys.access_token_key
var access_token_secret = keys.twitterKeys.access_token_secret

//my-tweets section
 
if (process.argv[2] === "my-tweets") {

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '81BURNyMdTwfycpepaotStJ6G',
  consumer_secret: '71MCoNjOQ0oMjOjsMPISUcRk5YOZsPMvnXyGbsIlXttaiNcajH',
  access_token_key: '2584573920-BEd4fWxCH43tCHny4RibDa9LSPWe3De06ksYfPt',
  access_token_secret: 'gciRYFwweTGY31W3IUrztzIYnlKe0KJwsKIV9VFXB8AFr'
});
 
var params = {screen_name: 'lfiig'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    
    for (i=0; i<20; i++){
      console.log("------------------------------")
      console.log("Tweet # " + [i+1])
      console.log("Tweeted on: " + tweets[i].created_at);
      console.log(tweets[i].text);
      console.log("------------------------------")
      console.log("")
    }

  }
});




//spotify-this-song

//movie-this
} else if (process.argv[2] === "movie-this") {

var request = require("request");
// Store all of the arguments in an array
var nodeArgs = process.argv;
// Create an empty variable for the movie name
var movieName = "mr+nobody";
// Loop through the node argument, inclusion of "+"s
for (var i = 3; i < nodeArgs.length; i++) {
  if (i > 3 && i < nodeArgs.length) {
    movieName = "";
    movieName = movieName + "+" + nodeArgs[i];
    
  }
  else {
    movieName = "";
    movieName += nodeArgs[i];
    
  }
}
// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&r=json";

request(queryUrl, function(error, response, body) {
  // If the request is successful
  if (!error && response.statusCode === 200) {
    // Parse the object for the data
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Country Produced: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
    console.log("Rotten Tomatoes Rating.: " + JSON.parse(body).tomatoRating);
    console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL);        
  }
});

}

//do-what-it-says