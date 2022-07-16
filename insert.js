const dbConnect = require('./mongodb');    // import connection file

const insert = async ()=>{
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            {name: "realme 9", price: 8000, stock: 200},
            {name: "realme 10", price: 9000, stock: 150},
            {name: "realme 11", price: 10000, stock: 100},
            {name: "realme 12", price: 11000, stock: 50}
        ]
        );
    
    if(result.acknowledged){
        console.log("Data Inserted");
    }
}

insert();