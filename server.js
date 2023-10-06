const express = require("express");
const app = express();
const cors = require("cors");


const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// get driver connection
const dbo = require("./config/database.js");

// mongodb connection
const connectDB = require('./config/database.js')
connectDB();

app.get('/', (req, res ) => {
  res.send("Hello World!")
})


app.listen(port, function() {
  console.log(`Express app listening on port ${port}`);
});
