'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }

// };

exports.static = {
  enable: true,
}
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
}
//开启跨域
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
//开启jwt认证
exports.jwt = {
  enable: true,
  package: 'egg-jwt'
}