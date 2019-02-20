<!--
##问题描述
el-slider组件当传递给v-model的数据不是响应式的, change时间返回的数据会出现"改不动" 拖动条会出现拖不动的情况.

## 解析
其实也是el-slider的写法问题, 源代码`slider/src/main#280`中可以看到
```
emitChange() {
        this.$nextTick(() => {
          this.$emit('change', this.range ? [this.minValue, this.maxValue] : this.value);
        });
      }
```
提交的是this.value.

如果this.value是响应式的, 在提交input事件后, this.value会更新成最新的值, 这时就没有问题.

但如果this.value不是响应式的, 就会出现问题:

v-model 语法糖会被解析为 => @input="sliderValue.a = val"
当input之后sliderValue.a虽然发生改变, 但vue没有监听到改变, 所以不会传递给子组件, 这导致子组件中获取的value还是老的值.

## 总结
1. 记住v-model请记得使用响应式数据, 这才是vue的正确使用方式, 避免遇到各个问题(如element框架的写法问题).
2. 在编写子组件的时候, 返回数据的时候不应该依赖传入的值, 因为传入的值不受自己控制.
-->
<template>
  <div>
    <el-slider
      :max="100"
      :min="0"
      :step="1"
      v-model="sliderValue.a" @input="onInput" @change="onChange"></el-slider>

    <!--
    el-slider的写法也会导致下面的写法也不能按预期执行.
    -->
    <el-slider
      :max="100"
      :min="0"
      :step="1"
      @change="onChange"></el-slider>
  </div>
</template>

<script>
  export default {
    name: 'ElSliderUnResponsiveModel',
    data() {
      return {
        sliderValue: {},
      }
    },
    computed: {
      // 计算属性也不是响应式的
      // 计算属性本来就是不能修改的, 所以就不应该是响应式的.
      test() {
        return {
          a: {a: 1},
          b: 1,
        }
      }
    },
    methods: {
      onInput(v) {
        console.log('onInput', v)
      },
      onChange(v) {
        console.log('onChange', v)
      },
    },
    mounted() {
      // 重新赋值, a会被绑上响应式
      // this.sliderValue = {...{a: 1}}
      // 这种写法a不会被绑上响应式
      this.sliderValue.a = 1
    }
  }
</script>
