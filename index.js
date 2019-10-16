const express = require("express");
const mongoose = require("mongoose");
let bodyParser = require("body-parser");
const port = 3000;
const URL = "mongodb+srv://user:user@cluster0-g3g8g.mongodb.net/card-game?retryWrites=true&w=majority";
const app = express();
//const url = process.env.MONGOLAB_URI;
mongoose.Promise = global.Promise;
mongoose.connect(URL);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const userSchema = new mongoose.Schema({
    id: String,
    userName: String,
    status: String
    });
const User = mongoose.model("User", userSchema);
app.post("/addUser", (req, res) => {
    const myData = new User(req.body);
    myData.save()
     .then(item => {
     res.send(`<h2>item with title:<span><i>”${req.body.title}”</i>       </span> saved to database</h2>  
     <a style=”font-size:25px” href=”/..”>Home page</a>`);
     })
    .catch(err => {
    res.status(400).send("unable to save to database");
     });
    });
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(3000, () => console.log("Example app listening on port 3000!"));
