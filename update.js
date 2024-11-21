const { resolveInclude } = require('ejs');
const dbConnect = require('./mongodb');

const updateData = async () =>{
    let data = await dbConnect();
     let result = await data.updateOne(
        {name:'note 6'},{
            $set: {name: 'note 6 plus', price: 520}
        }
    );
    console.log(result)
}
updateData()