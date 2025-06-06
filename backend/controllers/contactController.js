const asyncHandler = require('express-async-handler');

// @desc    Send contact email
// @route   POST /api/contact
// @access  Public
const sendContactEmail = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  // Placeholder: Implement email sending logic here (e.g., using Nodemailer)
  console.log(`Received contact form submission from ${name} (${email}): ${message}`);

  res.status(200).json({ message: 'Message received (email sending not yet implemented)' });
});

module.exports = {
  sendContactEmail,
};
