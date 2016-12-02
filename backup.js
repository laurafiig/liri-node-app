//twitter keys section
//read object from keys file
var keys = require('./keys');
//place keys in variables
var consumer_key = keys.twitterKeys.consumer_key
var consumer_secret = keys.twitterKeys.consumer_secret
var access_token_key = keys.twitterKeys.access_token_key
var access_token_secret = keys.twitterKeys.access_token_secret

//my-tweets section
//if tweets are requested
if (process.argv[2] === "my-tweets") {
//twitter npm call
var Twitter = require('twitter');
//apply keys 
var client = new Twitter({
  consumer_key: consumer_key,
  consumer_secret: consumer_secret,
  access_token_key: access_token_key,
  access_token_secret: access_token_secret
});
//get my data into tweets object, run thru latest 20 and log 
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
} else if (process.argv[2] === "spotify-this-song") {
//spotify npm call
var spotify = require('spotify');
// Store all of the arguments in an array
var nodeArgs = process.argv;
// Create default if no song name given
if (nodeArgs.length < 4) {
    songName = "hello";
// or an empty variable for the song name
  } else {var songName = ""};
// Loop through the node argument, inclusion of "+"s
for (var i = 3; i < nodeArgs.length; i++) {
  if (i > 3 && i < nodeArgs.length) {
    songName = songName + "+" + nodeArgs[i];
  } else {
    songName += nodeArgs[i];
  }
} 
// request to spotify 
spotify.search({ type: 'track', query: songName }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    // log data
     console.log("-------------------------------")
     console.log("Performed by the Artist: "+ data.tracks.items[0].artists[0].name)
     console.log("-------------------------------")
     console.log("Your song's name: "+ data.tracks.items[0].name)
     console.log("-------------------------------")
     console.log("From the album: "+ data.tracks.items[0].album.name)
     console.log("-------------------------------")
     console.log("Preview your song at: "+ data.tracks.items[0].preview_url)
     console.log("-------------------------------")     
});

//movie-this section
//if movie data is requested
} else if (process.argv[2] === "movie-this") {
//omdb npm call
var request = require("request");
// Store all of the arguments in an array
var nodeArgs = process.argv;
// Create default if no movie name given
if (nodeArgs.length < 4) {
    movieName = "mr+nobody";
// or an empty variable for the movie name
  } else {var movieName = ""};
// Loop through the node argument, inclusion of "+"s
for (var i = 3; i < nodeArgs.length; i++) {
  if (i > 3 && i < nodeArgs.length) {
    movieName = movieName + "+" + nodeArgs[i];
  } else {
    movieName += nodeArgs[i];
  }
} 
// request to OMDB 
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&r=json";

request(queryUrl, function(error, response, body) {
  
  if (!error && response.statusCode === 200) {
    // log the data
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