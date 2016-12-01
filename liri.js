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

}


//spotify-this-song

//movie-this

//do-what-it-says