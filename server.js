const express = require("express");
const fileUpload = require("express-fileupload")
// the following two are installed to send an email
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser")
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const apiRoutes = require("./routes/apiRoutes");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
// email connection
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mongodb connection
const connectDB = require("./config/database.js");
connectDB();

// middleware
app.get('/', async (req, res, next) => {
  res.json({ message: "API running..." })
})

// all routes will be handled by apiRoutes in routes folder
app.use('/api', apiRoutes)

app.use((error, req, res, next) => {
  // best practice to only display errors in development and not production mode
  if (process.env.NODE_ENV === "development") {
    console.error(error);
  }
  next(error)
})

app.post('/submit-form', (req, res) => {
  const {formData, orderData} = req.body;

  // Configure the email transporter (replace with your email service details)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  // Create the email content
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'New Form Submission',
    html: `
    <h1>New Form Submission</h1>
    <p>Date: ${formData.calendar}</p>
    <p>First Name: ${formData.floating_first_name}</p>
    <p>Last Name: ${formData.floating_last_name}</p>
    <p>Email Address: ${formData.floating_email}</p>
    <p>Phone Number: ${formData.floating_phone}</p>
    <p>Comments: ${formData.comment}</p>
    <p>Contact Method: ${formData.contact_method}</p>
    <h2>Order Details:</h2>
    <p>Total Items: ${orderData.orderTotal.itemsCount}</p>
    <p>Cart Subtotal: ${orderData.orderTotal.cartSubtotal}</p>
    <h3>Cart Items:</h3>
    <ul>
      ${orderData.cartItems.map(item => `
        <li>
          Product ID: ${item.productID}<br>
          Name: ${item.name}<br>
          Price: ${item.price}<br>
          Image: ${item.image ? item.image.path : 'N/A'}<br>
          Quantity: ${item.quantity}<br>
          Count: ${item.count}<br>
        </li>
      `).join('')}
    </ul>
  `
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Form submitted successfully!');
    }
  });
});


app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    res.status(500).json({
      message: error.message,
      stack: error.stack
    })
  } else {
    res.status(500).json({
      message: error.message
    })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})