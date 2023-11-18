        // 提供一个适配所有机型的rem工具，让1rem等于所有机型的十分之一
        // 1. 得到屏幕宽度
        // 2. 获取html元素
        // 3. 计算font-size
        // 适配各种设备（横屏，竖屏转换，ipad）
        (function(){
            // 性能 DOM开销性能比较大
            var htmlElement=document.documentElement;
            // DRY don't repeat yourself
            function getFontsize(){
                var width=window.innerWidth;
                var fontSize=width/10;
                return fontSize;
            }// 封装函数
            htmlElement.style.fontSize=getFontsize()+'px';
            window.addEventListener('resize', function() {
            htmlElement.fontSize = getFontsize() + 'px';})
            // html 动态设置font-size
            // 函数作用域
            // 变量，不会污染外面的作用域
        })()// 自执行函数
