const mysql = require('mysql');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'library'
});
db.connect()
db.query('select * from admin', (err, result, fields) => {
    if (err) {
        throw (err)
    } else {
        console.log('连接成功');
    }
    console.log(result);
})
db.end();