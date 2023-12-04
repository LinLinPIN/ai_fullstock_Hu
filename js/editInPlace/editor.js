/**
 * @func EditInPlace组件
 * @param {string} id 元素id 
 * @param {dom} parent 挂载点
 * @param {string} value 初始值
 * @author Hu
 * @date 2023/12/4
 */
function EditInPlace(id,parent,value){
    this.id= id;
    this.parentElement = parent || document.body;
    this.value = localStorage.getItem('value') || value|| 'default value' 
    this.createElement(this.id);
    this.attachEvents();
}

EditInPlace.prototype = {
    // 创建组件的DOM树,并挂载到app上
    createElement:function(id){
        // console.log(this,'---');
        // 动态创建dom 当前对象的containerElement属性
        // DoM 树,
        this.containerElement = document.createElement('div')
        this.containerElement.id=id
        // span节点的创建
        this.staticElement = document.createElement('span')
        this.staticElement.innerText = this.value;
        this.containerElement.appendChild(this.staticElement)

        // 输入框的创建
        this.fieldElement = document.createElement('input')
        this.fieldElement.type='text'
        this.fieldElement.value=this.value

        // 保存按钮的创建
        this.saveButton = document.createElement('input')
        this.saveButton.type='button'
        this.saveButton.className = 'save'
        this.saveButton.value='Save'

        // 取消按钮的创建
        this.cancelButton = document.createElement('input')
        this.cancelButton.type = 'button'
        this.cancelButton.className = 'cancel'
        this.cancelButton.value = 'Cancel'
            
        this.containerElement.appendChild(this.fieldElement)
        this.containerElement.appendChild(this.saveButton)
        this.containerElement.appendChild(this.cancelButton)

        this.parentElement.appendChild(this.containerElement)
        this.convertToText();
    },
    // 切换到文本状态
    convertToText:function(){
        this.fieldElement.style.display = 'none'
        this.cancelButton.style.display = 'none'
        this.saveButton.style.display = 'none'
        this.staticElement.style.display = 'inline'
    },
    attachEvents:function(){
        // console.log(this);
        // let that = this//对象实例保存下来了
        // // 可以使用箭头函数，箭头函数指向外界也就是实例化的对象
        // this.staticElement.addEventListener('click',function(){
        //     // this被覆盖
        //     console.log(this,that.cancelButton);
        //     // 拿到对象的this，指向事件监听的对象
        // })
        const fn = this.convertToEditable.bind(this)
        this.staticElement.addEventListener('click',fn)
        this.cancelButton.addEventListener('click',this.convertToText.bind(this))
        this.saveButton.addEventListener('click',this.save.bind(this))
    },
    convertToEditable:function(){
        this.fieldElement.style.display = 'inline'
        this.cancelButton.style.display = 'inline'
        this.saveButton.style.display = 'inline'
        this.staticElement.style.display = 'none'      
    },
    save:function(){
        const text = this.fieldElement.value
        window.localStorage.setItem('value',text)
        let value = localStorage.getItem('value')
        this.value=value
        this.staticElement.innerText = value
        this.convertToText();
    }
}