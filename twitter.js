//read object from keys file
var keys = require('./keys');

//place keys in variables
var consumer_key = keys.twitterKeys.consumer_key
var consumer_secret = keys.twitterKeys.consumer_secret
var access_token_key = keys.twitterKeys.access_token_key
var access_token_secret = keys.twitterKeys.access_token_secret

//my-tweets section
 
if (process.argv[2] === "my-tweets") {

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: consumer_key,
  consumer_secret: consumer_secret,
  access_token_key: access_token_key,
  access_token_secret: access_token_secret
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
