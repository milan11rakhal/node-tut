const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');
const app = express();

app.use(express.json());

app.get('/', async (req, resp ) =>{
    let data = await dbConnect();
    data =  await data.find().toArray();
    resp.send(data)
});

app.post('/', async (req,resp) => {

    let data = await dbConnect();

    let result = await data.insertOne(req.body)
    resp.send(result)
});


app.put('/:name',async (req,resp) => {
  console.log(req.body);

  let data = await dbConnect();
  let result = await data.updateOne(
    {name: req.params.name},{
        $set: req.body
    }
);
console.log(result);
 resp.send(req.body);
});


// delelte method api

app.delete('/:id',async (req, resp) => {
    console.log(req.params.id);
    const data = await dbConnect()
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    console.log(result)
    if (result.deletedCount > 0) {
        resp.send({ message: "Record deleted successfully" });
    } else {
        resp.send({ message: "No record found with the given ID" });
    }

})


app.listen(4000);