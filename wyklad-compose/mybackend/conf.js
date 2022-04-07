module.exports = {
    postgresPassword: process.env.POSTGRES_PASSWORD,
    postgresDb: process.env.POSTGRES_DB=myappdb,
    postgresUser: process.env.POSTGRES_USER=myappuser,
    postgresHost: process.env.POSTGRES_HOST=mypostgres,
    redisHost: process.env.REDIS_HOST=myredis
};