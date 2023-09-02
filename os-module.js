const { log } = require('console')
const os = require('os')

// info about the user
const user = os.userInfo()
    console.log(user)

   //method return the system uptime in seconds
    console.log(`The system uptime is ${os.uptime()} seconds`)

    const currentOS = {
        name: os.type(),
        release: os.release(),
        freeMem: os.freemem(),
        totalMem: os.totalmem(),
    }
    console.log(currentOS)