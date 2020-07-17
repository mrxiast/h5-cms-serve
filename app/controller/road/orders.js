'use strict';
const BaseController = require('../../core/baseController')

class OrderController extends BaseController {
    async getCount() {
        const { ctx } = this;
        const counts = await ctx.service.road.orders.getCount()
        if (counts) {
            this.success(counts)
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
            this.success(data)
        }
    }
}

module.exports = OrderController;
