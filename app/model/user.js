module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;
    const User = app.model.define('user', {
        userid: { type: STRING, primaryKey: true, },
        username: STRING(50),
        sex: INTEGER(1),
        userpass: STRING
    })
    return User
}