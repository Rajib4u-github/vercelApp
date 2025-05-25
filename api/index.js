const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;




// {
// "access_token": {   
//     "github-fine-gained-access-token": "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",
//     "github-classic-access-token": "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"
// }
// }