
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const Contact = require('./models/Contact'); // Import Contact model
require('dotenv').config(); // Load environment variables

// Initialize the app
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB connection error: ', err));

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Basic route to test
app.get('/', (req, res) => {
  res.send('Hello from EarlyVet Backend!');
});

// Contact Form Endpoint
app.post('/contact', async (req, res) => {
  try {
    const { fullName, email, contactNumber, message } = req.body;

    // Basic validation
    if (!fullName || !email || !contactNumber || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create new contact entry
    const newContact = new Contact({
      fullName,
      email,
      contactNumber,
      message,
    });

    // Save to MongoDB
    await newContact.save();

    // Email options
    const mailOptions = {
      from: email, // Sender's email (user's email)
      to: process.env.EMAIL_USER, // Your support email
      subject: `New Contact Form Submission from ${fullName}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Contact Number: ${contactNumber}
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent and saved successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));