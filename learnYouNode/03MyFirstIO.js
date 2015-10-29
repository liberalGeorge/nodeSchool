/**
 * Created by ghughes on 29/10/15.
 */
var fs = require('fs'),
    buffer = fs.readFileSync(process.argv[2]);

console.log(buffer.toString().split('\n').length - 1);