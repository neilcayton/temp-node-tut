const {readFile, writeFile} = require('fs');
console.log('start');
readFile('./content/first.txt','utf8' ,(err, result) =>{
    if(err){
        console.log(err)
        result
    }
    const first = result;
    readFile('./content/second.txt','utf8' ,(err, result) =>{
        if(err){
            console.log(err)
            result
        }
        const second = result;
    
        writeFile('./content/result-Async.txt', 
        `Here is the result of the sync: ${first}, ${second} `, (err, result)=>{
            if(err){
                console.log(err)
                result
            }

            console.log(result);

            console.log('done with this file');
        })
    } )
})
console.log('starting with the next one');