const dbConnect = require('./mongodb');

const deleteData = async () =>{
    let data = await dbConnect()
    // let result = await data.deleteOne(
    //     {name: 'note 7'}
    // )

    let result = await data.deleteMany(
        {name: 'note 5 plus'}
    )
    if(result.aknowledged){
        console.log(result)
    }
 
}
deleteData();