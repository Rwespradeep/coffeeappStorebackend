import mongoose from "mongoose";

const myCoffeeDB = mongoose.connection.useDb('CoffeeStore');
const ProdSchema = new mongoose.Schema({
    Title: { type: String },
    Description: { type: String },
    Image: { type: String },
    Price: { type: String }
})

const coffe_prod = myCoffeeDB.model('Coffeeees', ProdSchema);
export default coffe_prod;