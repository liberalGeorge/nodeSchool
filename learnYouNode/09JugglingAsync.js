/**
 * Created by georginahughes on 04/11/2015.
 */
var url1 = process.argv[2],
    url2 = process.argv[3],
    url3 = process.argv[4],
    response1,
    response2,
    response3,

    http = require('http'),
    bl = require('bl');

http.get(url1, url1GetCallback);
http.get(url2, url2GetCallback);
http.get(url3, url3GetCallback);

function url1GetCallback(response){
    response.pipe(bl(bl1Callback));

    function bl1Callback(err, data){
        if(err) return;

        response1 = data.toString();

        printOutResults();
    }
}

function url2GetCallback(response){
    response.pipe(bl(bl2Callback));

    function bl2Callback(err, data){
        if(err) return;

        response2 = data.toString();

        printOutResults();
    }
}

function url3GetCallback(response){
    response.pipe(bl(bl3Callback));

    function bl3Callback(err, data){
        if(err) return;

        response3 = data.toString();

        printOutResults();
    }
}

function printOutResults(){
    if(response1 && response2 && response3){
        console.log(response1);
        console.log(response2);
        console.log(response3);
    }
}