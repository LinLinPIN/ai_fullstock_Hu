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
        </div>
    </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { reactive } from 'vue';

const state = reactive({
    content: '',
    title: '',
    picture: []
})
</script>

<style lang="less" scoped>
:deep(.ql-container.ql-snow) {
    height: 200px;
}

.note-publish {
    min-height: 100vh;
    position: relative;

    .note-wrap {
        margin-top: 20px;

        .note-cell {
            border-bottom: 1px solid #d1d5db
        }
    }
}
</style>