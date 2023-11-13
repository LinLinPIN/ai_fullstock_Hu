# 浮动
1. 脱离文档流
2. 文字环绕
3. 让块级元素同行显示而且不会有空隙
4. 让行内元素可以设置宽高
5. 浮动元素可以使用 margin，但是不能使用margin 0 auto居中


# 清除浮动
1. 给父容器设置高度//绝大多数场景不适用
2. 增加子容器，在子容器上清除浮动
3. 借助伪元素 after 来清除浮动
    .clear::after{
            content:' ';
            clear:both;
            display: block;
        }
4. BFC

# BFC --Block Formatting Context
    - 块级格式化上下文

    - 如何创建bfc：
        1. 浮动：float：left||right//不能消除浮动
        2. 定位：position：absolute  ||  fixed
        3. 行内块：display：inline-block
        4. 表格单元：dispaly:table-cell  || table-xxx
        5. overflow:auto || hidden || scroll
        6. 弹性盒子： display:flex ||  inline-flex



    - bfc容器的特征
        bfc的效果是让处于bfc内部的元素和外部的元素相互隔离，使内外元素的定位不会相互影响
        1. 内部盒子也会遵照文档流的顺序排列
        2. bfc容器在计算高度时，会将内部浮动的子元素的高度也计算在内
        3. 解决外边距重叠问题