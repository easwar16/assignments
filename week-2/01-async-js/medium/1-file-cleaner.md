## File cleaner

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

const fs = require('fs');
const string ;
fs.readFile('a.text',(err,data) => {
if(err) throw err;
string = data;
console.log(data);
});
string = string.replace('/\s+/g',' ');
try {
fs.writeFile('a.text',string);
console.log("success");
}
catch(err) {
throw err;
}
