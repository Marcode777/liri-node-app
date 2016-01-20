var keys = require('./keys.js');
  if (process.argv[2]==='my-tweets'){
    console.log('my-tweets');
    console.log(keys.twitterKeys);

    var client = new Twitter(keys.twitterKeys);



  } else if(process.argv[2] === 'spotify-this-song'){
    console.log('spotify-this-song');
  } else if(process.argv[2] === 'movie-this'){
    console.log('spotify-this-song');
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