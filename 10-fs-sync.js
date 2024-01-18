const {readFileSync, writeFileSync} = require('fs');
// this are only the methods that are destructured from the fs module
console.log('start');

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result of the sync: ${first}, ${second} `, {flag: 'a'})


console.log('done with this task');
console.log('starting the next one');