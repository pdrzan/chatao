const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_SCHEMA || 'postgres',
                                process.env.DB_USER || 'postgres',
                                process.env.DB_PASSWORD || '',
                                {
                                    host: process.env.DB_HOST || 'localhost',
                                    port: process.env.DB_PORT || 5432,
                                    dialect: 'postgres',
                                    dialectOptions: {
                                        ssl: process.env.DB_SSL == "true"
                                    }
                                });
const User = sequelize.define('User', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
})

const UserLogged = sequelize.define('User logged', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
        primaryKey: true,
    },
})

const Chat = sequelize.define('Chat', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
        primaryKey: true,
    },
})

const Message = sequelize.define('Message', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
        primaryKey: true,
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

Chat.hasOne(Message, { foreignKey: "chatId" });

User.hasOne(Message, { foreignKey: "userId_whosent" });
User.hasOne(Chat, { foreignKey: "userId_1" });
User.hasOne(Chat, { foreignKey: "userId_2" });
User.hasOne(UserLogged, { foreignKey: "userId", unique: true });

module.exports = {
    sequelize: sequelize,
    User: User,
    UserLogged: UserLogged,
    Chat: Chat,
    Message: Message,
};
