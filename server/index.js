// import the server requirments
const express = require('express')
const cors = require('cors')
const {MongoClient} = require('mongodb')
const bcrypt = require('bcrypt')

// app is a application also the express.json thing is says that the input and output in the format of json
 const app = new express();
 app.use(express.json());
 // client is running in port 3000
 //any thord part application can be served,if the cors are enabled
 app.use(cors());

const client = new MongoClient('mongodb+srv://admin1:admin1@cluster0.7cat6gx.mongodb.net/?retryWrites=true&w=majority');
client.connect();
//outer circle is cluster
//inside circle is database
//inside database is collection(which is similar to mysql table)
//inside collection is document(which is similar to mysql table row or records)
const db = client.db("skill")
const col = db.collection("user")


 //from brower, the default url is triggering is get method 
 //localhost:8081/home
 //1st parameter is address and second parameter is service function
app.get('/home' , (req,res) => {
    res.send("it is the home page - New 1   Page")
} )

//1st parameter is address and second parameter is service function
//client send request to server which need to take
app.post('/insert', async(req,res)=> {
    //every request will have header and body section
    //req = {header: ....,body: actual_data}
    req.body.password = await bcrypt.hash(req.body.password,5)
    console.log(req.body);
    col.insertOne(req.body);
    res.send("Data Received")
} )
app.listen(8081);
console.log("server Running")