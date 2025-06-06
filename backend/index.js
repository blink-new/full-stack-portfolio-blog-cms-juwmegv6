const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Placeholder routes
// app.use('/api/projects', require('./routes/projects'));
// app.use('/api/blog', require('./routes/blog'));
// app.use('/api/contact', require('./routes/contact'));
// app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
