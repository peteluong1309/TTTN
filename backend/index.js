const express = require('express');
const cors = require('cors')
const connectDB = require('./config/db');

const app = express();
app.use(cors());

connectDB();


// Middlewares
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

// ROUTES
// app.get('/users', (req, res) => {
//   res.send('We are on home')
// });

app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/courses', require('./routes/api/courses'));
app.use('/api/categories', require('./routes/api/categories'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/courseregister', require('./routes/api/courseregister'));

// How do we start listening to the server
app.listen(9000);