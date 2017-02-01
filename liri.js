//variables test
var debug = true;  //console control


var dataKeys = require("./key.js"); //ok
var fs = require('fs'); //ok
var twitter = require('twitter'); //ok
var spotify = require('spotify'); //ok
// var request = require('omdb'); //ughh
var request = require('request'); //ok



//console log
if (debug) {
  console.log(dataKeys);
  console.log(fs);
  console.log(twitter);
  console.log(spotify);
  // console.log(omdb);
  console.log(request);
}



// 'https://api.spotify.com/v1/search?type=track&q=' + name of song + '&limit=10'


//commands


// my-tweets

// spotify-this-song

// movie-this

// do-what-it-says