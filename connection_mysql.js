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

/*
To set a Linux environment variable need to use the following command:
             export MYSECRETPASSWD=sometext
the result can be viewed by the following commands:
             env |grep MYSECRETPASSWD
or 
             printenv |grep MYSECRETPASSWD
or 
           echo $MYSECRETPASSWD
*/
/*
You can use the script below to use multiple samples.
the only difference is ( "if (error) throw error" and "if (error){cosnole.log(error)}")
*/
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
              if (error){cosnole.log(error)}
              console.table(result)
       }
)
connection.query(
       'select costs from test_an_user',
       function (errors, result){
              if (errors) {console.log(errors)}
              console.table(result)
       }
)

connection.end()
