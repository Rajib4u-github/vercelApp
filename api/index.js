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

app.get('/company',function(req,res){
    res.sendFile(path.join(__dirname, '../frontend/components', 'company.html'));
});

app.get('/companyv2',function(req,res){
    res.sendFile(path.join(__dirname, '../frontend/components', 'companyv2.html'));
});

app.get('/website',function(req,res){
    res.sendFile(path.join(__dirname, '../frontend/components', 'website.html'));
});

app.get('/admin',function(req,res){
    res.sendFile(path.join(__dirname, '../frontend/components', 'admin.html'));
});

app.get('/stock',function(req,res){
    res.sendFile(path.join(__dirname, '../frontend/components', 'stock.html'));
});

app.get('/profile',function(req,res){
    res.sendFile(path.join(__dirname, '../frontend/components', 'profile.html'));
});


app.get('/coching',function(req,res){
    res.sendFile(path.join(__dirname, '../frontend/components', 'coching.html'));
});

app.get('/ecomerce',function(req,res){
    res.sendFile(path.join(__dirname, '../frontend/components', 'ecomerce.html'));
});

app.get('/portfolio',function(req,res){
    res.sendFile(path.join(__dirname, '../frontend/components', 'portfolio.html'));
});


app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;