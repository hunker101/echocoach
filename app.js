const express = require('express');
const path = require('path');
const session = require('express-session'); // Import session
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Session Configuration
app.use(session({
    secret: 'secret-key', // In production, use a secure random string
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 } // Session expires in 1 hour
}));

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const webRoutes = require('./routes/web');
app.use('/', webRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Admin Panel at http://localhost:${PORT}/admin`);
});