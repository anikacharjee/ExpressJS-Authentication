const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware: Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware: Express Session
app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: true
}));

// Middleware: Custom Authentication Middleware
const authenticate = (req, res, next) => {
  if (req.session && req.session.user) {
    return next();
  } else {
    return res.status(401).send('Unauthorized');
  }
};

// Routes

// Login Route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // In a real-world scenario, you would check credentials against a database
  if (username === 'user' && password === 'password') {
    req.session.user = username;
    res.send('Login successful!');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Logout Route
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.send('Logout successful!');
});

// Protected Route (Requires Authentication)
app.get('/dashboard', authenticate, (req, res) => {
  res.send(`Welcome to the Dashboard, ${req.session.user}!`);
});

// Server Listening
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
