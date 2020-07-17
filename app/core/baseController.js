const Controller = require('egg').Controller

class BaseController extends Controller {
    success(data, msg) {
        this.ctx.body = {
            code: 200,
            result: data,
            message: msg || '操作成功'
        }
    }
    notFound(msg) {
        const message = msg || 'notFound'
        this.ctx.throw(404, message)
    }
}

module.exports = BaseController