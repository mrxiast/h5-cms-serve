
const Service = require('egg').Service;

class UserService extends Service {
    async findAll() {
        const { ctx } = this
        const userInfo = await ctx.model.User.findAll()
        return userInfo
    }
    async getUserService(userid) {
        const { ctx } = this
        let result = {}
        try {
            result = ctx.model.User.findAll({
                where: {
                    userid
                },
                raw: true//查询操作的时候，加入这个参数可以直接拿到对象类型的查询结果，否则还需要通过方法调用解析
            })
        } catch (err) {
            ctx.logger.error(err)
        }
        return result
    }
}

module.exports = UserService;
