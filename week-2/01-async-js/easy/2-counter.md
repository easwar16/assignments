## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let count = 0;
var iter = 0;
function counter() {
console.log('show at ' + (iter++));
setTimeout(counter, 1000);
}
counter();

(Hint: setTimeout)
