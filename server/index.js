const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080

//======== Mongodb Connection ========
mongoose.set('strictQuery', false)
console.log(process.env.MONGODB_URL);
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Connect to database");
}).catch((err)=>{
    console.log(err)
})


// =======######## User Section #########=======
// ========= Data Schema ==========
const userSchema = mongoose.Schema({ 
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    confirmPassword: String,
    profileImage: String
})


// ========== Model =========
const userModel = mongoose.model('user', userSchema)


app.get("/", (req, res)=>{
    res.send("Server is running...")
})

app.post("/signup", async(req, res)=>{
    console.log(req.body);
    const { email } = req.body;
    userModel.findOne({ email : email})
    .then((result)=>{
        if(result){
            console.log("This email already exist");
            res.send({ message: "This email already exist" })
        }
        else{
            const data = userModel(req.body);
            const save = data.save();
            res.send({message : "Register is successful!"})
        }
    })
    .catch((err)=>{
        console.log(err);
    })
})


// =======######## Product Section #########=======
// ========== Product Schema ============
const productSchema = mongoose.Schema({
    model: String,
    name: String,
    rating: Number,
    review: Array,
    price: Number,
    size:Array,
    image: String,
    category: String,
    categoryId: Number,
    stockItem: Number,
    details: String,
    composition: String,
    style: String,
    properties: String
})

// ========== Product Model =========
const productModel = mongoose.model('product', productSchema);

app.get('/products', async(req, res)=>{
    const query = {};
    const products = await productModel.find(query);
    res.send(products)
})
app.get('/products/:productID', async(req, res)=>{
    var ObjectId = (require('mongoose').Types.ObjectId);
    const id = req.params.productID;
    const filter = {
        _id : new ObjectId(id)
    }
    const product = await productModel.findOne(filter);
    res.send(product)
})



app.listen(PORT, ()=>console.log(`Server is running at port: ${PORT}`))