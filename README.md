# pitfalls-vue

描述笔者在使用vue时遇到的坑, 以及解决方案.

当然不只是坑, 也有工程的写法推荐, 笔者认为js太灵活, 导致某些功能实现上写法有很多种, 部分写法往往能运行, 但从维护性和简单度都不是最佳的,
所以我也想写下自己对一些实现方案的见解, 给自己备忘也希望对笔者有帮助.

> 手上的js项目太难维护啦, 有感而发, 希望都多多注意一下代码的"优雅".

## 清单

- [不相关的数据变化会导致另外的Dom重新挂载, 导致$el更改, 会导致绑定的事件丢失等问题](/src/components/DomRerender.vue)
- [el-slider组件在没有用户输入的情况下, 第一次绑定v-model的时候也会触发input事件, 但这其实是初始化, 并没有改变数据](/src/components/ElSliderInput.vue)
- [当传递给v-model的数据不是响应式的, change时间返回的数据会出现"改不动" 拖动条会出现拖不动的情况.](/src/components/ElSliderUnResponsiveModel.vue)
