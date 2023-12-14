<template>
    <div>
      <table>
        <thead>
          <th>序号</th>
          <th>书籍名称</th>
          <th>出版日期</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </thead>
        <tbody>
          <tr v-if="list.length" v-for="(book,index) in list" :key="book.id" >
            <td>{{ book.id }}</td>
            <td>{{ book.name }}</td>
            <td>{{ book.date }}</td>
            <td>{{ book.price }}</td>
            <td>
              <button @click="minus(index)">-</button>
              <span class="counter">{{ book.count }}</span>
              <button @click="add(index)">+</button>
            </td>
            <td>
              <button @click="remove(index)">移除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>总价格: {{price}}</h2>
    </div>
  
    <div v-if="!list.length">
      <h2>购物车为空~</h2>
    </div>
  </template>
  
  <script>
  export default {
    data(){
        return{
            temp:0,
            flag:true,
            num:1
        }
    },
    computed:{
        price(){
            let prices=0;
            for(let i=0;i<this.list.length;i++)
            prices+=this.list[i].count*this.list[i].price
            return prices
        }
    },
    methods:{
        remove(e){
           this.list.splice(e,1)
        },
        add(e){
            this.list[e].count++
        },
        minus(e){
            if(this.list[e].count>1)this.list[e].count--
        }
    },
  props:{
    list:{
        type:Array,
        default:[]
    }
  }
  }
  </script>
  
  <style lang="css" scoped>
  table {
    border: 1px solid #e9e9e9;
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  th, td {
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
  }
  
  th {
    background-color: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
  }
  
  .counter {
    margin: 0 5px;
  }
  </style>