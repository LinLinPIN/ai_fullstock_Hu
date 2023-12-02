function request(url){
    return new Promise((resolve)=>{
        let xhr = new XMLHttpRequest
        xhr.open('get',url,true)
        xhr.onreadystatechange = function (){
            resolve(xhr.response)
        }
        xhr.send()
    })
}

request('xxxx').then((data)=>{

})


fetch('xxxxxx')
.then((data)=>{
    return data.json()
})
.then((res)=>{

})


const res = await request('xxxxx')
console.log(res);