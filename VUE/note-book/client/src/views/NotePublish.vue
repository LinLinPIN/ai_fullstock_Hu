<template>
    <div class="note-publish">
        <div class="editor">
            <QuillEditor theme="snow" placeholder="请输入内容" contentType="html" v-model:content="state.content" />
        </div>
        <div class="note-wrap">
            <div class="note-cell">
                <van-field v-model="state.title" label="标题" placeholder="请输入标题" />
            </div>
            <div class="note-cell">
                <van-field label="图片上传">
                    <template #input>
                        <van-uploader v-model="state.picture" multiple max-count="1" />
                    </template>
                </van-field>
            </div>
            <div class="note-cell">
                <div class="sort">
                    <span>选择分类</span>
                    <span @click="() => show = true">{{ state.note_type }}<van-icon name="arrow" /></span>
                </div>
                <van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" />
            </div>
        </div>
        <div class="btn">
            <van-button type="primary" block @click="publish">发布笔记</van-button>
        </div>
    </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { reactive, ref } from 'vue';
import axios from '@/api'

const state = reactive({
    content: '',
    title: '',
    picture: [],
    note_type: "美食"
})
const actions =
    [{ name: '美食' },
    { name: '旅行' },
    { name: '恋爱' },
    { name: '学习' },
    { name: '吵架' }]
const show = ref(false)
const onSelect = (item) => {
    show.value = false
    state.note_type = item.name
}
const publish = async () => {
    if (!state.title || !state.content) {
        showFailToast('请填写标题或内容')
        return
    }
    const { id, nickname } = JSON.parse(localStorage.getItem('userInfo'))
    const res = await axios.post('/notePublish', {
        title: state.title,
        note_type: state.note_type,
        head_img: state.picture.length && state.picture[0].content || '',
        userId: id,
        nickname,
        note_content: state.content
    })
}
</script>

<style lang="less" scoped>
:deep(.ql-container.ql-snow) {
    height: 200px;
}

.note-publish {
    min-height: 100vh;
    position: relative;
    padding-bottom: 2rem;
    box-sizing: border-box;

    .note-wrap {
        margin-top: 20px;

        .note-cell {
            border-bottom: 1px solid #d1d5db
        }

        .sort {
            display: flex;
            justify-content: space-between;
            padding: 10px 16px;
            color: #323233;
            font-size: 14px;
        }
    }

    .btn {
        width: 80%;
        margin: 0 auto;
        margin-top: 2rem;
    }
}
</style>