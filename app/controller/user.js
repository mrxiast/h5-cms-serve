'use strict'

const Controller = require('egg').Controller

class UserController extends Controller {
    async user() {
        const { ctx } = this
        const users = await ctx.service.user.findAll()
        ctx.body = users
    }
    async getuser() {
        const { ctx } = this
        const userid = ctx.request.query.userid
        const user = await ctx.service.user.getUserService(userid)
        console.log(user)
        ctx.body = user
    }
}

module.exports = UserController