/**
 * Created by ghughes on 29/10/15.
 */
var directory,
    extension,
    callback,
    fs = require('fs'),
    path = require('path'),
    output = [];


function directoryReadCallback(err, data) {
    if(err) return callback(err);

    for (var i = 0; i < data.length; i++) {
        if (path.extname(data[i]) === extension) {
            output.push(data[i]);
        }
    }

    return callback(null, output);
}

module.exports = moduleExports;

function moduleExports(directoryParam, extensionParam, callbackParam) {
    directory = directoryParam;
    extension = '.' + extensionParam;
    callback = callbackParam;

    fs.readdir(directory, directoryReadCallback);
}