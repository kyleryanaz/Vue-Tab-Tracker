module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'vtabtracker',
    user: process.env.DB_USER || 'vtabtracker',
    password: process.env.DB_PASS || 'vtabtracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './vtabtracker.sqlite'
    }
  }
}