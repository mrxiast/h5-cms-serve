module.exports = (options, app) => {
    return async function authorTest(ctx, next) {
        const longtoken = ctx.request.header.authorization;
        const header = longtoken.slice(0, 6)
        if (longtoken) {
            if (header !== 'Bearer') {
                ctx.body = {
                    code: 401,
                    message: '无效的token',
                    retult: false
                }
                return
            }
            const token = longtoken.slice(7)
            const result = await ctx.service.token.decodeJwt(token)
            if (!result.data) {
                ctx.body = {
                    code: 401,
                    message: '您的登录状态已过期，请重新登录',
                    retult: false
                }
                return
            }
        } else {
            ctx.body = {
                code: 401,
                message: '您还没有登录，请登陆后再进行操作',
                retult: false
            }
            return
        }

        await next();
    }
};