const Router = require('@koa/router')
const router = new Router()
const { findNoteListByType, findNoteDetailById, publishNote } = require('../controllers/mysqlControl.js')
const { formateDate } = require('../utils/index.js')

router.post('/findNoteListByType', async (ctx) => {
    const { note_type } = ctx.request.body
    try {
        const res = await findNoteListByType(note_type)
        ctx.body = {
            code: '8000',
            data: res,
            msg: "successful"
        }
    } catch (error) {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }
})

router.get('/findNoteDetailById', async (ctx) => {
    const { id } = ctx.query
    try {
        const res = await findNoteDetailById(id);
        ctx.body = {
            code: '8000',
            data: res,
            msg: 'successful'
        }
    } catch (error) {
        ctx.body = {
            code: '8005',
            data: 'error',
            msg: '服务器异常'
        }
    }
})

router.post('/notePublish', async (ctx) => {
    const note = ctx.request.body
    note.c_time = formateDate(new Date())
    note.m_time = formateDate(new Date())
    const edit = note.id
    try {
        const res = await publishNote(note, edit);
        if (res.affectedRows !== 0) {
            ctx.body = {
                code: '8000',
                data: 'success',
                msg: '发布成功'
            }
        } else {
            ctx.body = {
                code: '8004',
                data: 'fail',
                msg: '发布失败'
            }
        }

    } catch (error) {
        ctx.body = {
            code: '8005',
            data: 'error',
            msg: '服务器异常'
        }
    }
})

module.exports = router
