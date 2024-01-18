
const path = require('path')


console.log(path.sep);



const filePath = path.join('/content','subfolder', 'text.txt')
console.log(filePath);


const base = path.basename(filePath)
console.log(base);


const absolute_a = path.resolve(__dirname, `${filePath}`)
const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute);

console.log(absolute_a) //not applicable