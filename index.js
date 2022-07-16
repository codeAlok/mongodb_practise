// ********** READ data from mongodb through Nodejs ************

const dbConnect = require('./mongodb'); // requiring database conncectivity

// 1st approach --- to handle promises
// dbConnect().then((resp)=>{
//   resp.find().toArray().then((data)=>{
//     console.warn(data);
//   });
// });


// 2nd approach ---- to handle promises  (latest code)
const main = async ()=>{
  let data = await dbConnect();
  data = await data.find().toArray();
  console.warn(data);
}

main();