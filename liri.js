//variables test
var debug = true;  //console control
var dbDone = false; //tested var ok




var dataKeys = require("./key.js"); //ok
var fs = require('fs'); //ok
var twitter = require('twitter'); //ok
var spotify = require('spotify'); //ok
// var request = require('omdb'); //ughh
var request = require('request'); //ok





// console log done for later

if (dbDone) {
  console.log(dataKeys);
  console.log(fs);
  console.log(twitter);
  console.log(spotify);
  console.log(request);
}



//commands


// my-tweets

//console log
if (debug) {

  	// console.log(omdb);
    console.log(myTweets);
	// console.log(client);
	// console.log(params);
	// console.log(data);

}

var myTweets = function() {

var client = new twitter(dataKeys.twitterKeys);

  var params = { screen_name: 'robbeeio', count: 10 };

twitter.getUserTimeline(params, error, 
            function (data) {
                expect(JSON.parse(data).length).toEqual(10); //maynot be right way
                done();
            })  


}


// it('should get timeline for a user', function (done) {
//         var params = { screen_name: 'robbeeio', count: '10'};  //x
//         twitter.getUserTimeline(params, error, 
//             function (data) {
//                 expect(JSON.parse(data).length).toEqual(10);
//                 done();
//             }
//         );
//     });




// spotify-this-song

// movie-this

// do-what-it-says