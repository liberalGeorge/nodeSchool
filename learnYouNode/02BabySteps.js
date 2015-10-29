/**
 * Created by ghughes on 29/10/15.
 */
var output = 0;

for (var i = 2; i < process.argv.length; i++) {
    if(Number(process.argv[i])){
        output += Number(process.argv[i]);
    }
}

console.log(output);