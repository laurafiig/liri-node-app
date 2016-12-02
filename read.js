// Load the fs package to read and write
var fs = require("fs");

  // We will read the existing bank file
  fs.readFile("random.txt", "utf8", function(err, data) {

    // Break down all the data inside
    data = data.split(",");
    
    var doWhat = data[0]
    var doTo = data[1]

    console.log(data[0])
    console.log(doWhat)
    console.log(data[1])
    console.log(doTo)
    
  });
