'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const token = app.middleware.author();
  router.get('/', controller.home.index);
  router.get('/api/v1/home', controller.home.home);
  router.get('/alluser', controller.user.user)
  router.get('/userById', controller.user.getuser)

  router.post('/api/v1/login',controller.user.login)
  router.get('/api/v1/getUser',token,controller.otherUser.getUser)

};