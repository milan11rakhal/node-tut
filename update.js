const { resolveInclude } = require('ejs');
const dbConnect = require('./mongodb');

const updateData = async () =>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:'nokia 11'},{
            $set: { price: 5220}
        }
    );
    console.log(result)
   

}
updateData()