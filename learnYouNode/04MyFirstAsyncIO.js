/**
 * Created by ghughes on 29/10/15.
 */
var fs = require('fs');

fs.readFile(process.argv[2], fileReadCallback);

function fileReadCallback(err, data){
    if(err) return;
    console.log(data.toString().split('\n').length - 1);
}
