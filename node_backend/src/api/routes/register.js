const express = require('express');
const AuthService = require('../../services/auth');

const router = express.Router();
const authService = new AuthService();

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const emailExists = false;

    if (emailExists) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const userInput = { email, password };
    const { token } = await authService.register(userInput);

    return res.json({ token });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Registration failed' });
  }
});

module.exports = router;
