// 新手在上班后会遇到的编程难题
// 树状列表 文件夹 省市区联动
// 列表转树
// parentId 树
const list = [
    {
        id: 1001,
        parentId: 0,
        name: "AA",
    },
    {
        id: 1002,
        parentId: 1001,
        name: "BB",
    },
    {
        id: 1003,
        parentId: 1001,
        name: "CC",
    },
    {
        id: 1004,
        parentId: 1003,
        name: "DD",
    },
    {
        id: 1005,
        parentId: 1003,
        name: "EE",
    },
    {
        id: 1006,
        parentId: 1002,
        name: "FF",
    },
    {
        id: 1007,
        parentId: 1002,
        name: "GG",
    },
    {
        id: 1008,
        parentId: 1004,
        name: "HH",
    },
    {
        id: 1009,
        parentId: 1005,
        name: "II",
    },
];


function listToTree(data) {
    const res = []
    data.forEach(item => {
        const parentId = data.find(node => node.id === item.parentId)
        if (parentId) {
            parentId.children = parentId.children || []
            parentId.children.push(item)
        } else {
            res.push(item)
        }
    });
    return res;
}

function listToTree2(data) {
    const obj = {}
    data.forEach(data => {
        obj[data.id] = data
    })
    let list = [];
    list.forEach(item => {
        const parentId = obj[item.parentId]
        if (item.parentId) {
            parentId.children = parentId.children || []
            parentId.children.push(item)
        } else {
            list.push(item)
        }
    })
}



console.log(listToTree(list));