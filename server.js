const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");



require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());











const apiRouter = require('./routes/api');
const { stringify } = require('querystring');

app.use('/api', apiRouter);
app.use(bodyParser.json());


if (process.env.NODE_ENV === "production") {

    
    app.use(express.static("client/build"));
    const path = require('path')
 
    app.get("*", (req, res) => {
         res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
     });
 
   }
app.listen(port, () => {
    console.log('server is running on port:' + port);
})


