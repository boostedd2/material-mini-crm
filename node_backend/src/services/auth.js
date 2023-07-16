const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/user');

class AuthService {
  async register(userInput) {
    try {
      const { email, password, firstName, lastName } = userInput;

      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return { error: 'Email already registered' };
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        email,
        password: hashedPassword,
        firstName,
        lastName
      });

      const token = this.generateToken();

      return { token };
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async login(email, password) {
    try {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return { error: 'Invalid email or password.' };
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return { error: 'Invalid email or password.' };
      }

      const token = this.generateToken();

      return { token };
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  generateToken() {
    return jwt.sign({}, config.jwtSecret, { expiresIn: '1h' });
  }
}

module.exports = AuthService;
