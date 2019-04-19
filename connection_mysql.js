var mysql = require('mysql')
var cors = require('cors')
var userName = process.env.USERNAME
var passwd = process.env.MYSECRETPASSWD
var dbName = process.env.DB

var connection = mysql.createConnection({
       host: 'localhost',
       user: userName,
       password: passwd,
       database: dbName 
})

connection.connect()

connection.query(
       'select * from test_an_user',
       function (error, result){
              if (error) throw error
              console.log(result)
       }
)

connection.end()
