const Router = require('@koa/router')
const router = new Router()
const { userLogin, userFind, userRegister } = require('../controllers/mysqlControl.js')


router.prefix('/user')
// 定义接口
router.post('/login', async (ctx) => {
  // console.log(ctx.request.body); // 获取到了前端传递的参数
  const { username, password } = ctx.request.body

  try {
    const result = await userLogin(username, password)
    // console.log(result);
    if (result.length) {  // 查到了
      let data = {
        id: result[0].id,
        nickname: result[0].nickname,
        username: result[0].username
      }

      ctx.body = {
        code: '8000',
        data: data,
        msg: '登录成功'
      }
    } else {
      ctx.body = {
        code: '8004',
        data: 'error',
        msg: '账号或密码错误'
      }
    }
  } catch (err) {
    ctx.body = {
      code: '8005',
      data: err,
      msg: '服务器异常'
    }
  }

})

// 注册接口
router.post('/register', async (ctx) => {
  const { nickname, username, password } = ctx.request.body
  if (!nickname || !username || !password) {
    ctx.body = {
      code: '8001',
      msg: '账号密码或昵称不能为空'
    }
    return
  }
  // 校验数据库中是否存在该账号

  try {
    const findRes = await userFind(username)
    if (findRes.length) {
      ctx.body = {
        code: '8003',
        data: 'error',
        msg: '账号已存在'
      }
      return
    }
    const registerRes = await userRegister(username, password, nickname)
    // console.log(registerRes);
    if (registerRes) {// 写入成功
      ctx.body = {
        code: '8000',
        data: 'success',
        msg: '注册成功'
      }
    } else {
      ctx.body = {
        code: '8004',
        data: 'fail',
        msg: '注册失败'
      }
    }
  }
  catch (error) {
    ctx.body = {
      code: '8005',
      date: error,
      msg: '服务端异常'
    }
  }
})

module.exports = router