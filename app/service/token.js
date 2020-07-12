'use strict';
 
const Service = require('egg').Service;
const jwt = require('jsonwebtoken');
 
class TokenService extends Service {

  async signJwt(_id,user_name,password) {
    return 'Bearer'+ ' ' + jwt.sign({
      data: {
        _id,
        user_name,
        password
      },
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7),
    }, this.app.config.jwt.secret);
  }
 
  async decodeJwt(token) {
    try {
      return jwt.verify(token, this.app.config.jwt.secret);
    } catch (err) {
      return err;
    }
  }
}
 
module.exports = TokenService;