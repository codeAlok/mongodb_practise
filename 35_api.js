const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());  // (to get data from request)
// express.json() is used instead of body-parser() after express version 4.6  to use (req.body)

app.get('/', async (req, res)=>{

    let data = await dbConnect();
    data = await data.find().toArray();

    console.log(data);
    res.send(data);
});

// ***** post method *****
app.post('/', async (req, res)=>{
    
    let data = await dbConnect();
    let result = await data.insertMany(req.body); //data sent from postman/reactjs to node js

    res.send(result); 
})

// ******** Put method *********

// check how to change /update data from (query parameters)
// like:   app.get('/:name') ????

app.put("/", async (req, res)=>{
    let data = await dbConnect();
    let result = data.updateOne(
        {name: "realme xx"}, {$set: req.body}
        );

    console.log(req.body);
    res.send({result: "update"});
})

app.listen(5000);