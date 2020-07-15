module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;
    const User = app.crm.define('user', {
        user_id: { type: STRING, primaryKey: true },
        user_name: STRING,
        nick_name: STRING,
        ava_url: STRING,
        sex: INTEGER,
        phone: INTEGER,
        e_mail: STRING,
        password: STRING
    })
    return User
}