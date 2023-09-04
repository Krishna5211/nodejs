const {readFile} = require('fs')

console.log('Creating a first task');

readFile('./content/first.txt', 'utf8', (err,res) =>{
   if(err){
    console.log(err)
   }
   console.log(res)
   console.log('Completed first task')
})
console.log('Hello World')