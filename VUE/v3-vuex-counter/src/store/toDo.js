import { defineStore } from "pinia";
import { ref } from "vue";

export const useToDoStore = defineStore('toDo', () => {
    const list = ref([
        {
        text: '刷力扣',
        id: 1
    },
    { text: '学vue', id: 2 },
    { text: '学pinia', id: 3 }
])
    return {
        list
    }
})