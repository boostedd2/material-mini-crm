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

    const response = await authService.login(email, password);

    if (response.error) {
      return res.status(401).json({ error: response.error });
    }

    return res.json({ token: response.token });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;
