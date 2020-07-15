
const Service = require('egg').Service;

class UserService extends Service {
    async findAll() {
        const { ctx } = this
        const userInfo = await ctx.crm.User.findAll()
        return userInfo
    }
    async getUserService(userid) {
        const { ctx } = this
        let result = {}
        try {
            result = ctx.crm.User.findAll({
                where: {
                    userid
                }
            })
        } catch (err) {
            ctx.logger.error(err)
        }
        return result
    }
    async login(user_name, password) {
        const { ctx } = this
        let result = {}
        console.log(ctx.crm.User, 'ctx.crm.User')
        try {
            result = await ctx.crm.User.findOne({
                where: {
                    user_name,
                    password
                }
            })
        } catch (err) {
            throw new Error(err)
        }
        return result
    }
}

module.exports = UserService;
