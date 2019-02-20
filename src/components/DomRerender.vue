<!--
## 问题描述
不相关的数据变化会导致另外的Dom重新挂载, 导致$el更改, 会导致绑定的事件丢失等问题

在vue仓库里也有对于的issue, 目前为止还开着呢. [<input> rerenders while changes affects only sibling elements](https://github.com/vuejs/vue/issues/6929)
## 解决
使用v-show或者更改dom结构, 使dom不是以下样子
```
<div v-if/>
<div> // 中间的节点将出现上诉问题
<div v-if/>
```
-->
<template>
  <div>
    <!--正常的情况-->
    <div style="width: 40%; display:inline-block;vertical-align: top">
      <!--如果使用v-show, 一切正常-->
      <div v-show="b" style="display:inline-block;background: red;width:100%;height: 100px"></div>
      <div
        ref="b" @click="vueClick('b')"
        style="height: 100px; width: 100px;overflow: scroll"
        :style="{'background': b?'beige':'aquamarine'}">
        <div style="height: 200%"></div>
      </div>
      <div v-if="b" style=";background: blue;height: 100px"></div>
    </div>

    <!--有问题的情况-->
    <div style="width: 40%; display:inline-block;vertical-align: top">
      <!--注意这里使用的是v-if, 将会导致a的Dom重新挂载, $el会发生变化-->
      <div v-if="a" style="background: red;width:100%;height: 100px"></div>
      <div
        ref="a" @click="vueClick('a')"
        style="height: 100px; width: 100px;overflow: scroll"
        :style="{'background': a?'beige':'aquamarine'}">
        <div style="height: 200%"></div>
      </div>
      <div v-if="a" style=";background: blue;height: 100px"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DomRerender',
    data() {
      return {
        a: true,
        b: true
      }
    },
    methods: {
      vueClick(ab) {
        console.log('vue click', ab)
      },
    },
    mounted() {
      this.$refs['a'].addEventListener('click', () => {
        this.a = !this.a
        console.log('native click a')
      })
      this.$refs['b'].addEventListener('click', () => {
        this.b = !this.b
        console.log('native click b')
      })
    }
  }
</script>
