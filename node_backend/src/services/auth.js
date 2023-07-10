const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const config = require('./config');

class AuthService {
  async register(userInput) {
    try {
      const salt = randomBytes(32);
      const hashedPassword = await argon2.hash(userInput.password, { salt });

      const token = this.generateToken();

      return { token };
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async login(email, password) {
    try {

      const validPassword = await argon2.verify(userRecord.password, password);
      if (!validPassword) {
        throw new Error('Invalid password');
      }

      const token = this.generateToken();

      return { token };
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  generateToken() {
    const token = jwt.sign({}, config.jwtSecret, { expiresIn: '1h' });
    return token;
  }
}

module.exports = AuthService;
