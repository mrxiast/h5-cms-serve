module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize
    const Orders = app.road.define('orders', {
        id: { type: STRING, primaryKey: true },
        user_id: STRING,
        order_id: STRING,
        status: INTEGER,
        address_id: STRING,
        all_price: STRING,
    })
    return Orders
}