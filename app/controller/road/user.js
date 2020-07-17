'use strict';
const BaseController = require('../../core/baseController')

class OtherUserController extends BaseController {
  async getUser() {
    const { ctx } = this;
    const counts = await ctx.service.road.user.getCount()
    if (counts) {
      this.success(counts)
    }
  }
}

module.exports = OtherUserController;
