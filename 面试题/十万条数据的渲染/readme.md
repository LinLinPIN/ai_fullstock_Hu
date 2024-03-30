# 1. 不做任何操作直接渲染

# 2. setTimeout
 浏览器不需要一次性渲染上万条数据，创建多个定时器分批次分堆渲染
 dom 结构的渲染和页面的刷新率不同步造成闪烁

# 3. requestAnimationFrame(该定时器和屏幕刷新率有关) + fragment (时间分片)
 Window.requestAnimationFrame(callback)

# 4. 虚拟列表
 1. 拿到上万条数据放在原数组中
 2. 获取可视区域的高度
 3. 滚动页面的过程中实时计算可视区域可以展示的数据的 起始下标和 结束下标，去原数组中截取要展示的数据