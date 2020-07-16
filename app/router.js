'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const token = app.middleware.author();

  //crm数据库登录
  router.post('/api/v1/crm/login', controller.crm.user.login)

  //road数据库操作
  router.get('/api/v1/road/getUser', token, controller.road.user.getUser)
  router.get('/api/v1/road/orderCount', token, controller.road.orders.getCount)
  router.get('/api/v1/road/getOrderList', token, controller.road.orders.getOrderList)


};