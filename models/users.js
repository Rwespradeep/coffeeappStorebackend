import mongoose from "mongoose";

const myCoffeeDB = mongoose.connection.useDb('CoffeeStore');

const userSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String }
})

const user_prod = myCoffeeDB.model('Userssss', userSchema);
export default user_prod;