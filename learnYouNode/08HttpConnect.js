/**
 * Created by georginahughes on 01/11/15.
 * Random change
 */
var url = process.argv[2],
    http = require('http'),
    bl = require('bl');

http.get(url, httpGetCallback);

function httpGetCallback(response){
    response.pipe(bl(blCallback));

    function blCallback(err, data){
        if(err) return;

        console.log(data.toString().length);
        console.log(data.toString());
    }
}