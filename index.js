const mongoose = require('mongoose'); 

const main = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/e-com', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }); 

        const ProductSchema = new mongoose.Schema({
            name: String,
            price: Number,
        });

        const ProductModel = mongoose.model('products', ProductSchema);

        let data = new ProductModel({ name: 'm 10', price: 1000 });
        let result = await data.save();
        console.log(result);
    } catch (err) {
        console.error('Error connecting to the database:', err.message);
    } finally {
        await mongoose.connection.close();
    }
};

main();
