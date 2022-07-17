const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');  // to access mongo object method to change objectId for id of data

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

// ********* Delete method *******

// used Here ** Query Parameters **
// http://localhost:5000/62d2bf67d028da58327e7002 (add id in url)
// use (rea.params.id) to access through url

// here mongodb.ObjectId used to change data into ObjectId (because _id is in form of ObjectId)

app.delete("/:id", async(req, res)=>{
    console.log(req.params.id);

    const data = await dbConnect();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});

    res.send(result);
});

app.listen(5000);