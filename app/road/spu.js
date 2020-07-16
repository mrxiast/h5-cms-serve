module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize
    const Spu = app.road.define('spu', {
        id: { type: STRING, primaryKey: true },
        name: STRING,
        product_url: STRING,
        type: INTEGER,
        content: STRING,
        price: INTEGER,
        new_price: INTEGER
    })
    return Spu
}