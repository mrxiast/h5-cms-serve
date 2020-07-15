module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize
    const User = app.road.define('user', {
        id: { type: STRING, primaryKey: true },
        username: STRING,
        nick_name: STRING,
        ava_url: STRING,
        phone: INTEGER,
        e_mail: STRING,
        password: STRING
    })
    return User
}