// LRU 用到的结点
// Hash key -> value
// 双端链表
// Hash 链表
class ListNode{
    constructor(key,val){
        this.key = key;// O(1)的查询
        this.val = val;// val
        this.pre = null;
        this.next = null;
    }
}

class LRUCache{
    constructor(capacity){
        this.capacity = capacity;
        this.size = 0
        this.data = {}// HashMap O(1)的复杂度查询
        this.head = new ListNode();
        this.tail = new ListNode();
        this.head.next = this.tail
        this.tail.pre = this.head
    }
    put(key,val){
        let node = new ListNode(key,val)
        if(!this.data[key]){
            this.data[key]=node;
            // head 指针指向的是
            this.appendHead(node);
            this.size++
            if(this.size>this.capacity){
                const lastKey = this.removeTail()
                delete this.data[lastKey]
                this.size--
            }
        }else{
            let node = this.data[key]
            this.removeNode(node)
            node.val = val
            this.appendHead(node)
        }
    }
    get(key){
        if(!this.data[key])return -1;
        else{
            let node = this.data[key]
            this.removeNode(node)
            this.appendHead(node)
            return node.val
        }
    }
    appendHead(node){
        let firstNode = this.head.next
        this.head.next = node;
        firstNode.pre = node
        node.next = firstNode
        node.pre = this.head
    }
    removeTail(){
        const key = this.tail.pre.key
        this.removeNode(this.tail.pre)
        return key
    }
    removeNode(node){
        let preNode = node.pre;
        let Nextnode = node.next
        preNode.next = Nextnode
        Nextnode.pre = preNode
    }
}