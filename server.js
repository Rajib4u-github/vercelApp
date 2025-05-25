const express = require("express");
const app = express();

// app.get("/", (req, res) => res.send("Express on Vercel"));

app.get('/',function(req,res){
    res.sendFile('./frontend/components/home.html', { root: __dirname });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
