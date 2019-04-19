var express = require('express')
var mysql = require('mysql')
var cors = require('cors')
var userName = process.env.USERNAME
var passwd = process.env.MYSECRETPASSWD
var dbName = process.env.DB
var app = express();
var selectAll = 'select * from test_an_user'
var sumCosts = 'select sum(costs) as costs from test_an_user'
var sumIncomin = 'select sum(income) as income from test_an_user'

var connection = mysql.createConnection({
       host: 'localhost',
       user: userName,
       password: passwd,
       database: dbName 
})
connection.connect(
       err => {
              if(err){
                     return err
              }
       }
)

/*app.use(cors)*/

app.get(
       '/', 
       (req, resp) => {
       connection.query(
              selectAll, 
              (err, result) => {
                     if (err) {
                            return resp.send(err)
                     }
                     else {
                            resp.json({
                                   data: result
                            })
                     }
       })
})
app.get(
       '/sumcosts', 
       (req, resp) => {
       connection.query(
              sumCosts, 
              (err, result) => {
                     if (err) {
                            return resp.send(err)
                     }
                     else {
                            resp.json({
                                   data: result
                            })
                     }
       })
})
app.get(
       '/sumincomin', 
       (req, resp) => {
       connection.query(
              sumIncomin, 
              (err, result) => {
                     if (err) {
                            return resp.send(err)
                     }
                     else {
                            resp.json({
                                   data: result
                            })
                     }
       })
})
app.listen(
       3000,
       () => {
              console.log('Server starting')
       }
)
