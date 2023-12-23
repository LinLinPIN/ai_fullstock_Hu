import { createStore } from 'vuex'
import axios  from 'axios'

export default createStore({
  state: {// data
    questionList: [],
    itemNum:1,//第几题
    answerId:[]
  },
  getters: {// == computed
    rightAnswer(state){
      let arr = []
      for(let question of state.questionList){
        for(let answer of question.topic_answer){
          if(answer.is_standard_answer == 1){
            arr.push(answer.topic_answer_id)
          }
        }
      }
      return arr
    }
  },
  mutations: {// methods
    getQuestionList(state, list){// 所有写在mutations中的函数第一个参数都是state
      state.questionList = list
    },
    nextItem(state){
      state.itemNum++
    },
    saveAnswer(state,id){
      state.answerId.push(id)
    }
  },
  actions: {// methods 异步代码
    getQuestionListAction(context){
      axios.get('https://www.fastmock.site/mock/3a33c631bcba043a378b4ceafbf994b8/question/questions')
      .then(res=>{
        console.log(res);
        context.commit('getQuestionList',res.data)
      })
    },
    nextItemAction({commit,state},id){
      if(state.itemNum<state.questionList.length){
        commit('nextItem')}
      commit('saveAnswer',id)
    }
  },
  modules: {
  }
})
