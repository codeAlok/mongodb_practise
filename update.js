// ********* update data in mongodb through nodeJs ********

const dbConnect = require('./mongodb');

const updateData = async ()=>{
    let data = await dbConnect();

    // updateOne => change 1 data
    let result = await data.updateMany(
        {name: "realme 10"}, {$set: {name: "iphone 12 max pro", price: 55000}}
    );
    console.log(result);
}

updateData();