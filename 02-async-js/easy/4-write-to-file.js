// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

var fs = require('fs');

var data = "This is what the file contains!";

fs.writeFile('abc.txt', data, function(err) {
    console.log(fs.readFileSync("abc.txt","utf8"));
});

console.log("hey!");

