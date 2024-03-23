const Router = require('@koa/router')
const router = new Router()
const { findNoteListByType, findNoteDetailById, publishNote } = require('../controllers/mysqlControl.js')

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

    const date = new Date()
    note.c_time = date.toLocaleString();
    note.m_time = date.toLocaleString();
    console.log(note);
    try {
        const res = await publishNote(note);
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

module.exports = router
