// include the express module
const express = require('express');

// initialize express app
const app = express();

// enable static public folder
app.use(express.static('public'));

// listen at port 3000
app.listen(3000, function(){
    console.log("yay! it's working!")
});

