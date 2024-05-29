# 1. 说说你对 css 盒模型的理解

1. 是什么?
   浏览器在页面布局时,将所有的元素表示为一个个矩形盒子,每一个盒子包含四个部分:
   content ,padding ,border ,margin

2. 标准盒模型(border-box)
   盒子总宽度:width 代表 content 的宽度+padding+border+margin
3. 怪异盒模型(content-box)
   盒子总宽度就为 width+margin
   width:content+border+padding

# 2. css 中的选择器有哪些?说说优先级

标签选择器
类名选择器
id 选择器
.box1, .box2, .box3 一次性选中多个类名
后代选择器 #app div app 中 div 内的 div 也会被选中
子代选择器 #app > div 只选中直属 app 的所有 div
相邻选择器 .box1 + .box2
群组选择器 #app .box2 选中多个 box2
属性选择器 input[abc='abc'] 只有具有 abc='abc'属性的 input 才会被选中
伪元素选择器 #input::before
伪类选择器 #input:focus

important > 内联 > id > 类名 > 标签

# 3.说说 css 的单位有哪些?

1. px
2. rem
3. em
4. vw/vh
5. %
