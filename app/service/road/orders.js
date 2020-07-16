
const Service = require('egg').Service;

class UserService extends Service {
    async getCount() {
        const { ctx } = this
        const count = await ctx.road.Orders.count()
        return count
    }
    async getOrderList(pageNum, pageSize, type) {
        const { ctx } = this
        let offset = (pageNum - 1) * pageSize

        const orderInfo = await ctx.road.Spu.findAndCountAll({
            limit: parseInt(pageSize),
            offset,
        })
        return orderInfo
    }
}

module.exports = UserService;
