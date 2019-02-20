<!--
## 问题描述
el-slider组件在没有用户输入的情况下, 第一次绑定v-model的时候也会触发input事件, 但这其实是初始化, 并没有改变数据

## 原因
翻阅slider代码可以发现在mounted的时候发生一次赋值(this.firstValue = Math.min(this.max, Math.max(this.min, this.value));), 而又通过watch firstValue来emit事件就导致了mounted也会触发input

## 解决
如果你依赖input事件做逻辑的话, 错误的input事件会导致错误的逻辑.

要解决这个问题就需要你在input事件里自己去判断一下新旧值是否相等,再做对于的逻辑.
-->
<template>
  <div>
    <el-slider
      :max="10"
      :min="0"
      :step="1"
      v-model="sliderValue" @input="onInput" @change="onChange"></el-slider>
  </div>
</template>

<script>
  export default {
    name: 'DomRerender',
    data() {
      return {
        sliderValue: 1,
      }
    },
    methods: {
      onInput() {
        console.log('onInput', this.sliderValue)
      },
      onChange() {
        console.log('onChange', this.sliderValue)
      },
    },
    mounted() {

    }
  }
</script>
