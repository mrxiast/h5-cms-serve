'use strict';
const Controller = require('egg').Controller;

class OrderController extends Controller {
    async getCount() {
        const { ctx } = this;
        const counts = await ctx.service.road.orders.getCount()
        if (counts) {
            ctx.body = {
                code: 200,
                message: '操作成功',
                result: counts
            }
        }
    }
}

module.exports = OrderController;
