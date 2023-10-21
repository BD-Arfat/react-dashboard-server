const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req,res)=>{
    res.send("hi hello")
});
app.use(cors());
app.use(express.json())

// dashboard
// qoTRR8u9x4XO4HHx

//////////////////////


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dashboard:qoTRR8u9x4XO4HHx@cluster0.s0vwyit.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const productCollection = client.db('dashboard').collection('products');
    // const ordersCollection = client.db('dashboard').collection('order');


    app.get('/products', async (req, res) => {
        const query = {};
        const cursor = productCollection.find(query);
        const products = await cursor.toArray();
        res.send(products)
      });


  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


//////////////////////

app.listen(port,()=>{
    console.log(`hi hello ${port}`)
})