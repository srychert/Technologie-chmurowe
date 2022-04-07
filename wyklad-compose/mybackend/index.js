const express = require('express')
const cors = require('cors')
const config = ('./conf')
const port = 4000

const app = express()
app.use(cors())

// const { Pool, Client } = require('pg')

// const pool = new Pool({
//     password: config.postgresPassword,
//     database: config.postgresDb,
//     user: config.postgresUser,
//     host: config.postgresHost
// })

// pool.on('error', () => connsole.log('Cannot connect'))

// pool
//     .query('CREATE TABLE IF NOT EXISITS values (number INT)')
//     .catch(err => console.log(err))

// async function getTime(){
//     const res = await pool.query('SELECT NOW()')
//     console.log(res)
// }

// pool.end()


app.get('/hello', (req, res) => {
    res.json({ msg: "Hello form backend!\n" })
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})