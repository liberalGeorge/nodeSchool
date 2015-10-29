/**
 * Created by ghughes on 29/10/15.
 */
var directory = process.argv[2],
    extension = process.argv[3],
    fileListing = require('./06bMakeItModular');

fileListing(directory, extension, directoryReadCallback);

function directoryReadCallback(err, data) {
    if (err) return;

    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
}