// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

var fs = require('fs');
let str;
fs.readFile('abc.txt', 'utf8', function(err, data) {
    let dataArray = data.split('');
    while (dataArray.includes(' ')) {
        let index = dataArray.indexOf(' ');
        if (dataArray.at(index-1) === ' ' || dataArray.at(index+1) === ' ') {
            dataArray.splice(index,1);
            console.log(dataArray);
        }
        else {
            dataArray.fill(',',index,index+1);
        }
    }
    str = dataArray.toString().replaceAll(',,,',' ').replaceAll(',','');

    fs.writeFile('abc.txt', str, function(err) {
        console.log(fs.readFileSync('abc.txt','utf8'));
    });
});