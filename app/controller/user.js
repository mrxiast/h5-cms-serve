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
    async login(){
        const {ctx} = this
        const userName = ctx.request.body.userName
        const password = ctx.request.body.password
        const userInfo = await ctx.service.user.login(userName,password)
        if(userInfo){
            const token = await ctx.service.token.signJwt(userInfo.user_id,userName,password)
            console.log(token)
            ctx.body = {
                code:200,
                message:'登陆成功',
                token:token
            }

        }else{
            ctx.body = {
                code:500,
                message:'账号或密码错误',
                token:''
            }
        }
    }
}

module.exports = UserController