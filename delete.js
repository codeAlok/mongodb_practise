// ***** Delete data in mongodb through nodejs ********

const dbConnect =  require('./mongodb');

const deleteData = async ()=>{
    let data = await dbConnect();

    // deleteOne => delete only one data

    let result = await data.deleteMany(
        {name: "max pro 5" }
    );

    if(result.acknowledged){
        console.log("record Deleted");
    }
}

deleteData();