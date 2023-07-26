// const fs = require('fs');
// fs.readFile("a.txt","utf-8", function callbackFn(err, data) {
//     console.log(data)
// } 
// )  logic to read froma file with simple callback function.

const express = require('express')
const app = express()
const port = 5001

function sumall(a, b){
    var sum = 0;
    for(var i = a; i < b; i++){
        sum+= i;
    }
    return sum;
}

function handleFirstRequest(req, res) {
    var cc=req.query.cc;  // default way to pass an input in url using ?<cc=100> example. separated by & and you can add more into URL header.
    var x = sumall(0,cc)  // use it anywhere in your code.
    console.log(x);     
        res.send('Hello World of Laddus the calculated sum is :'+x+' !')
} 

function createuserRequest(req, res) {
    res.send("hellow there !!");
    
}
app.get('/handleSumReq', handleFirstRequest)
app.post('/createUser', createuserRequest)

function started(req, res) {
        console.log(`Example app listening on port ${port}`)
      
}
app.listen(port, started())


