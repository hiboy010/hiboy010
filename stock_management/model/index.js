const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const Supplier = sequelize.define('Supplier', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contact_info: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    supplierId: {
        type: DataTypes.INTEGER,
        references: {
            model: Supplier,
            key: 'id'
        }
    }
});

const Order = sequelize.define('Order', {
    productId: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    order_date: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
});

sequelize.sync();
