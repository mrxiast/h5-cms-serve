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
    async getOrderList() {
        const { ctx } = this
        const pageNum = ctx.request.query.pageNum
        const pageSize = ctx.request.query.pageSize
        const type = ctx.request.query.type
        const orderInfo = await ctx.service.road.orders.getOrderList(pageNum, pageSize, type)

        if (orderInfo) {
            let data = {
                total: orderInfo.count,
                list: orderInfo.rows
            }
            ctx.body = {
                code: 200,
                message: '操作成功',
                result: data
            }
        }
    }
}

module.exports = OrderController;
