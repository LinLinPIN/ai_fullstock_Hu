// 二叉树
function TreeNode(val){
    this.val = val 
    this.left = null
    this.right = null 
}
let root ={

}

function preOrder(root){
    if(!root)return []
    let res = []
    res.push(root.val)
    res=res.concat(preOrder(root.left))
    res=res.concat(preOrder(root.right))
    return res
}
