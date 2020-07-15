/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1594279505914_7699';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  //关闭egg自带的csrf验证
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['http://localhost:8080']
  };
  //跨域配置
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  //jwt key配置
  config.jwt = {
    secret: 'xiasongtao',
    // enable:true
  }
  // ！！！！！添加的配置信息在这里 [Begin]！！！！！！
  config.sequelize = {

    datasources: [
      {
        delegate: 'crm', // 加载所有的模型到 app.model and ctx.model
        baseDir: 'crm', // 要加载的模型目录`app/crm/*.js`
        dialect: 'mysql',
        host: '203.195.222.243',
        port: 3306,
        database: 'crm',
        username: 'root',
        password: 'Xia199208.',
        timezone: '+08:00', // 保存为本地时区
        query: { raw: true },
        dialectOptions: {
          requestTimeout: 999999,
          // instanceName:'DEV'
          dateStrings: true,
          typeCast(field, next) {
            // for reading from database
            if (field.type === "DATETIME") {
              return field.string();
            }
            return next();
          }
        },
        define: {
          underscored: true, // 注意需要加上这个， egg-sequelize只是简单的使用Object.assign对配置和默认配置做了merge, 如果不加这个 update_at会被转变成 updateAt故报错
          // 禁止修改表名，默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数
          // 但是为了安全着想，复数的转换可能会发生变化，所以禁止该行为
          freezeTableName: true
        }
      },
      {
        delegate: 'road', // 加载所有的模型到 app.model and ctx.model
        baseDir: 'road', // 要加载的模型目录`app/road/*.js`
        dialect: 'mysql',
        host: '203.195.222.243',
        port: 3306,
        database: 'road',
        username: 'root',
        password: 'Xia199208.',
        timezone: '+08:00', // 保存为本地时区
        query: { raw: true },
        dialectOptions: {
          dateStrings: true,
          typeCast(field, next) {
            // for reading from database
            if (field.type === "DATETIME") {
              return field.string();
            }
            return next();
          }
        },
        define: {
          underscored: true, // 注意需要加上这个， egg-sequelize只是简单的使用Object.assign对配置和默认配置做了merge, 如果不加这个 update_at会被转变成 updateAt故报错
          // 禁止修改表名，默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数
          // 但是为了安全着想，复数的转换可能会发生变化，所以禁止该行为
          freezeTableName: true
        }
      }
    ]



  }

  // ！！！！！添加的配置信息在这里 [End]！！！！！！

  return {
    ...config,
    ...userConfig,
  };
};
