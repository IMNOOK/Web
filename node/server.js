const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log('Start Server : localhost:3000');
})

// npm mysql 로 mysql 연결하여 데이터 베이스와 소통하기
var mysql = require('mysql');
var pool = mysql.createPool({
    connectTimeout : 10,
    host : 'localhost',
    user : 'root',
    password : 'dhksthxpa12',
    database : 'opentutorials'
})

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//라우팅 방법
app.get('/', function(req, res){
    //render함수를 통해서 각 라우팅마다 페이지 호출
    res.render('index.html')
})

app.get('/about', function(req, res){
    res.send('about page')
})



app.get('/db', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err) throw err;
        
        connection.query('SELECT * FROM topic', function(error, results, fields) {
             res.send(JSON.stringify(results));
             console.log('results',results);
            connection.release();
            if(error) throw error;
        });
    })
})