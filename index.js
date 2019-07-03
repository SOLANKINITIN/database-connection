const express = require("express");
const hbs = require("express-handlebars");
const adminRouter = require("./Router/adminRouter");
const path =  require('path');
const bodyParser = require("body-parser");
const mongoose =require("mongoose");
const app = express();
app.engine('hbs', hbs({
    extname: "hbs",
    defaultLayout: __dirname + "/views/layout/main",
    partialsDir: __dirname + "/views/partial"
}));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use('/static', express.static(path.join(__dirname, 'public')))


app.use("/admin", adminRouter)

const  PORT =3000;
const DATABASEURL = "mongodb://admin:admin123@ds127938.mlab.com:27938/doctorai_admin"
mongoose.connect(DATABASEURL, {
    useNewUrlParser: true
}, (err) => {
    if (err) {
        console.log("Unable connect to the database")
    } else {
        console.log("Connected To The Database")
    }
})

app.listen(PORT,(Error)=>{
    if(Error){
        console.log("error");

    }else{
        console.log("server running");
    }
})