// include file system module
var fs = require('fs');
 
// read file sample.json file
fs.readFile('readings.json',
    // callback function that is called when reading file is done
    function(err, data) {       
        // json data
        var jsonData = data;
 
        // parse json
        var jsonParsed = JSON.parse(jsonData);
 
        // access elements
        console.log(jsonParsed.feeds[0].entry_id + "having " + jsonParsed.feeds[0].field2);

});