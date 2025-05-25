const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path');

// app.get("/", (req, res) => res.send("Express on Vercel"));
app.set("view engine", "html");
app.set('views', path.join(__dirname, 'frontent/components'));
app.engine('html', require('ejs').renderFile);
app.use(cors()); 


//console.log(path.join(__dirname, '../frontend/components', 'home.html'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '../frontend/components', 'home.html'));
});


app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;