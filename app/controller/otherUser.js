'use strict';
const Controller = require('egg').Controller;

class OtherUserController extends Controller {
  async getUser() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = OtherUserController;
