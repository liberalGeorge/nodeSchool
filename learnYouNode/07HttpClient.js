/**
 * Created by ghughes on 29/10/15.
 */
var url = process.argv[2],
    http = require('http');

http.get(url, httpCallback);

function httpCallback(response) {
    response.setEncoding('utf8');

    response.on('data', httpDataCallback);
    response.on('error', httpErrorCallback);
    response.on('end', httpEndCallback);

    function httpDataCallback(chunk) {
        console.log(chunk);
    }

    function httpErrorCallback() {
    }

    function httpEndCallback() {
    }
}