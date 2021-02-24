require('dotenv').config()

module.exports = {
    mysql: {
        host: process.env.HOST,
        post: process.env.POST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE
    }
}