'use strict';
const Controller = require('egg').Controller;

class OtherUserController extends Controller {
  async getUser() {
    const { ctx } = this;
    const counts = await ctx.service.road.user.getCount()
    if (counts) {
      ctx.body = {
        code: 200,
        message: '操作成功',
        result: counts
      }
    }
  }
}

module.exports = OtherUserController;
