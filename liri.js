var keys = require('./keys.js');
var Twitter = require('twitter');
var spotify = require('spotify');
var params = process.argv;
var selection = params[3];
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
});;
  if (process.argv[2]==='my-tweets'){
    console.log('my-tweets'); 
    //console.log(keys.twitterKeys);
    var client = new Twitter(keys.twitterKeys);
    var params = {q: 'MarcodeTriple7'};
    client.get('search/tweets',params,function(error, tweets, response){      
      if(!error) {
        console.log(tweets);
      } else {
        console.log(error)
      }
      //console.log(response);
    });
} else if(process.argv[2] === 'spotify-this-song'){
    console.log('spotify-this-song');
    spotify.search({ type: 'track', query: selection }, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
    } 
      console.log(data);
 
    // Do something with 'data' 
});
  } else if(process.argv[2] === 'movie-this'){
    console.log('movie-this');
  } else if (process.argv[2]==='do-what-it-says'){
    console.log('do-what-it-says');
  };




  //console.log("trying to do the hw");
  //function my-tweets(){
    //console.log("something")
  //};
  //function spotify-this-song(){
    //console.log("something 2")
  //}
  //function movie-this(){
    //console.log("something 3")
  //}
  //function do-what-it-says(){
    //console.log("something 4")
  //}