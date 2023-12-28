// 二叉树
function TreeNode(val){
    this.val = val 
    this.left = null
    this.right = null 
}
let root ={

}

function inOrder(root){
    if(!root)return []
    let res = []
    res=inOrder(root.left).concat(res)
    res.push(root.val)
    inOrder(root.right)
    return res
}
