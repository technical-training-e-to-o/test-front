const Sequelize = require("sequelize")
const url = process.env.DATABASE_URL ||"postgres://gzznihge:zlu7NCfEmC8I2QbS5ICTTSXnbe0HDAPK@fanny.db.elephantsql.com/gzznihge"
const sequelize = new Sequelize(url,{    dialect: 'postgres',
    ssl: true,
    protocol: "postgres",

    logging: true,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // <<<<<< YOU NEED THIS
        }
    })

let Task = sequelize.define("tasks", {
  name: Sequelize.STRING,
  status: Sequelize.STRING,
  deadline: Sequelize.DATE
})

module.exports = {
  Task,
  sequelize
}