// 封装连接mysql的函数

const mysql = require('mysql2');
const config = require('../config/index.js');

// 创建线程池
const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT,
})

// 连接mysql
const allService = {
  query: function (sql, values) {
    // 链接线程
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(err)
        } else {
          // 执行sql语句
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()   // 释放连接
          })
        }
      })
    })
  }
}

// 登录
const userLogin = (username, password) => {
  let _sql = `select * from users where username="${username}" and password="${password}";`
  return allService.query(_sql)
}

// 查询账号是否重复
const userFind = (username) => {
  let _sql = `select * from users where username="${username}"`
  return allService.query(_sql)
}

// 注册
const userRegister = (username, password, nickname) => {
  let _sql = `insert into users (username,password,nickname) values("${username}","${password}","${nickname}");`
  return allService.query(_sql)
}

// 根据tpye查找日记列表
const findNoteListByType = (type) => {
  let _sql = `select * from note where note_type="${type}" `
  return allService.query(_sql)
}

const findNoteDetailById = (id) => {
  let _sql = `select * from note where id="${id}"`
  return allService.query(_sql)
}

const publishNote = (note, edit) => {
  let _sql = ''
  if (edit) {
    _sql = `update note set userId=${note.userId},title="${note.title}",note_type="${note.note_type}",note_content="${note.note_content}",head_img="${note.head_img}",nickname="${note.nickname}",c_time="${note.c_time}",m_time="${note.m_time}" where id=${note.id}`
  } else {
    _sql = `insert into note (userId,title,note_type,note_content,head_img,nickname,c_time,m_time,id)
    values("${note.userId}","${note.title}","${note.note_type}","${note.note_content}","${note.head_img}","${note.nickname}","${note.c_time}","${note.m_time}",${note.id})`
  } return allService.query(_sql)
}

module.exports = {
  userLogin,
  userFind,
  userRegister,
  findNoteListByType,
  findNoteDetailById,
  publishNote
}