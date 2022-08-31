<script setup>
  import { 
    reactive, 
    toRefs,
    onMounted,
    onBeforeMount,
    getCurrentInstance,
  } from 'vue';

  import Dot from './Dot.vue';
  import Director from './Director.vue';

  const instance = getCurrentInstance(); // 获取当前组件实例
  // console.log(instance.slots.default()[0].children.length);
  // 获取 slots 中 children 的 length

  const emit = defineEmits(['changeDir']);

  const props = defineProps({
    autoPlay: {
      type: Boolean,
      default: true
    },
    durations: {
      type: Number,
      default: 0
    },
    initial: {
      type: Number,
      default: 1
    },
    hasDot: {
      type: Boolean,
      default: true
    },
    hasDirector: {
      type: Boolean,
      default: true
    },
    dotBgColor: {
      type: String,
      default: 'orange'
    },
    autoPlayDirection: {
      type: String,
      default: 'next'
    }
  });

  const state = reactive({
    currentIndex: props.initial,
    itemLen: 0
  });

  // 使用 <script setup> 的组件默认是关闭的，即通过 ref 和 $parent链 获取组件的公开实例
  // 不会暴露任何在其中声明的绑定。 
  defineExpose({
    ...toRefs(state)
  });

  let t = null;

  const autoPlay = () => {
    if (props.autoPlay) {
      t = setInterval(() => {
        setIndex(props.autoPlayDirection);
      }, props.durations)
    }
  };

  const setIndex = (dir) => {
    switch (dir) {
      case 'next':
        state.currentIndex += 1;
        if (state.currentIndex === state.itemLen + 1) {
          state.currentIndex = 1;
        }
        emit('changeDir', 'next');
        break; 
      case 'prev':
        state.currentIndex -= 1;
        if (state.currentIndex === 0) {
          state.currentIndex = state.itemLen;
        }
        emit('changeDir', 'prev')
        break;
    }
  }

  onMounted(() => {
    state.itemLen = instance.slots.default()[0].children.length;
    props.autoPlay&&autoPlay();
  });

  onBeforeMount(() => {
    clearIntervalFn();
  })

  const  clearIntervalFn = () => {
    clearInterval(t);
    t = null;
  }

  const dotClick = (index) => {
    state.currentIndex > index ? emit('changeDir', 'prev') 
                               : emit('changeDir', 'next');
    state.currentIndex = index;
  }

  const mouseEnter = () => {
    clearIntervalFn();
  }

  const mouseLeave = () => {
    props.autoPlay&&autoPlay();
  }

  const dirClick = (dir) => {
    setIndex(dir);
  }



</script>

<template>
  <div 
    class="carousel"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
  > 
    <div class="inner">
      <dot
        :itemLen="state.itemLen"
        :currentIndex="state.currentIndex"
        :hasDot="hasDot"
        :dotBgColor="dotBgColor"
        @dotClick="dotClick"
      ></dot>
      <director
        dir="prev"
        @dirClick="dirClick"
      ></director>
      <director
        dir="next"
        @dirClick="dirClick"
      ></director>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .carousel{
    width: 100%;
    height: 100%;

    .inner {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
</style>