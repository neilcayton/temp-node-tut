const os = require('os')


// info about the current user

const user = os.userInfo()
console.log(user);


// method returns the system uptime in seconds

console.log(`The System Uptime is ${os.uptime()} in seconds`)
console.log(`The System Uptime is ${os.uptime() / 60} in minutes`)


const currentOS = {
    name: os.type(),
    hostname: os.hostname(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(), 
    network: os.networkInterfaces(),
}

console.log(currentOS);