/**
 * Created by ghughes on 29/10/15.
 */
var directory = process.argv[2],
    extension = '.' + process.argv[3],
    fs = require('fs'),
    path = require('path');

fs.readdir(directory, directoryReadCallback);

function directoryReadCallback(err, list){
    if(err) return;

    for(var i = 0; i < list.length; i++){
        if(path.extname(list[i]) === extension) {
            console.log(list[i]);
        }
    }
}