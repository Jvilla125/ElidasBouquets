const express = require("express");
const fileUpload = require("express-fileupload")
const cookieParser = require("cookie-parser")
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const apiRoutes = require("./routes/apiRoutes");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
// mongodb connection
const connectDB = require("./config/database.js");
connectDB();

// middleware
app.get('/', async (req, res, next) => {
  res.json({message: "API running..."})
})

// all routes will be handled by apiRoutes in routes folder
app.use('/api', apiRoutes)

app.use((error, req, res, next) => {
    console.error(error);
    next(error)
})
app.use((error, req, res, next) => {
    res.status(500).json({
        message: error.message,
        stack: error.stack
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})