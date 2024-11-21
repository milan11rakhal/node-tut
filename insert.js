const dbConnect = require('./mongodb');

const insert = async () => {
 try{
    const db = await dbConnect();
    const result = await db.insertMany(
                [
                    {  name: 'note 5', brand : 'vivo', price : 320, category: 'mobile'},
                    {  name: 'note 6', brand : 'vivo', price : 320, category: 'mobile'},
                    {  name: 'note 7', brand : 'vivo', price : 320, category: 'mobile'}
                ]
        );
    console.log(result);
 }catch(error){
    console.error('Error inserting document:', error);
 }
}
insert()
