let arr = [1, 2, 3, 4, 6, 7, 8,]// 有序，线性且连续的结构

// {
//     val:1,// 数据域
//     next:{// 指针域
       
//     }
// }

let list = {

}
// 数组中增加或者删除一个元素会导致n个元素位置移动，时间复杂度为O(n)
// 链表中增加或删除一个元素时间复杂度为O(1)

function ListNode(val){
    this.val = val;
    this.next = null
}

let node1 = new ListNode(1)
node1.next = new ListNode(2)

// 插入一个节点
let node3 = new ListNode(3)
node3.next=node1.next
node1.next=node3

//删除一个节点
// const target = node1.next;
// node1.next=target.next
node1.next=node1.next.next
console.log(node1.next);