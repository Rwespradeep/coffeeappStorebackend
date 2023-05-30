import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import coffe_prod from './models/products.js';
import user_prod from './models/users.js';

//app config
const app = express();
const port = process.env.PORT || 9000;
dotenv.config();

//middleware
app.use(express.json());  // to send and get json responses back both into the db and on to the console
app.use(cors());  // to allow requests from any origin and headers

//DB configuration
mongoose.connect(process.env.MONGO_DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to db successfully');
    }).catch(err => {
        console.log('Error connecting to db: ' + err);
    })

//api routes

//fetching products
app.get('/products', async (req, res) => {
    try {
        const prods = await coffe_prod.find();
        res.status(200).json(prods.reverse());
    } catch (err) {
        res.status(500).json(err);
    }
})

//creating products
app.post('/addProducts', async (req, res) => {
    try {
        const newCofeProd = new coffe_prod(req.body);
        const savedProd = await newCofeProd.save();
        res.status(200).json(savedProd);

    } catch (err) {
        res.status(500).json(err);
    }
})

//creating users
app.post('/addUsers', async (req, res) => {
    try {

        const newUser = new user_prod(req.body);
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);

    } catch (err) {
        res.status(500).json(err);
    }
});



//listen
app.listen(port, () => console.log(`Backend started on: ${port}`));
