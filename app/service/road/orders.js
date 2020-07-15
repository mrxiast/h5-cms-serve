
const Service = require('egg').Service;

class UserService extends Service {
    async getCount() {
        const { ctx } = this
        const count = await ctx.road.Orders.count()
        return count
    }
}

module.exports = UserService;
