/*
   Demo of file copy to test node-readline
   Extension to Node.js
   2014 scriptol.com
*/  

var fs = require('fs')
var readline = require("/scripts/node-readline/node-readline.js")

var source="/scripts/node-readline/demosrc.htm"
var target="/scripts/node-readline/demotgt.htm"

var r=readline.fopen(source,"r")
if(r===false)
{
   console.log("Error, can't open ", source)
   process.exit(1)
} 

var w = fs.openSync(target,"w");
var count=0;
do
{
      var line=readline.fgets(r)
      if(line != false)
      {
        console.log(line)
        fs.writeSync(w, line + "\n", null, 'utf8')
        count+=1
      }
}
while (!readline.eof(r))

readline.fclose(r)
fs.closeSync(w)

console.log(count, " lines read.")

/* End */
