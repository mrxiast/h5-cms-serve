
const Service = require('egg').Service;

class UserService extends Service {
    async findAll() {
        const { ctx } = this
        const userInfo = await ctx.model.crm.User.findAll()
        return userInfo
    }
    async getUserService(userid) {
        const { ctx } = this
        let result = {}
        try {
            result = ctx.model.crm.User.findAll({
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
        console.log(ctx.model.crm, '332219999999999991')
        let result = {}
        try {
            result = await ctx.model.crm.User.findOne({
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
