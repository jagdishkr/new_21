const express = require('express');
const port= 3000;
const cors = require ('cors')
const app= express();
const bodyparser= require('body-parser');
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors())
const obj = {
    id: 123,
    name: 'test',
    description: 'demo',
    price: '123rs',
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    quantity: '123'
  }
app.get('/get' , (req,res) =>{
    res.send(obj)
})
app.post('/post' , (req,res) =>{
    res.send('post api is ready')
})
app.put('/put' , (req,res) =>{
    res.send('put api is ready')
})
app.delete('/delete' , (req,res) =>{
    res.send('post api is ready')
})


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });
app.listen(port , ()=>{console.log('server created')})