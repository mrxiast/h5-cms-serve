module.exports = (options, app) => {
    　　return async function authorTest(ctx, next) {
    　　　　const token = ctx.request.authorization;
            console.log(ctx.request.authorization,'token')
    　　　　await next();
    　　}
    };