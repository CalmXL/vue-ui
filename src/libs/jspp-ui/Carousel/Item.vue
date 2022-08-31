<script setup>
  import { 
    getCurrentInstance, 
    reactive,
    watch
  } from 'vue';

  const props = defineProps({
    transitionDir: String
  })

  const instance = getCurrentInstance();
  const state = reactive({
    selfIndex: instance.vnode.key,
    currentIndex: instance.parent.exposed.currentIndex.value,
  })
  watch(() => {
    return instance.parent.exposed.currentIndex.value
  }, (value) => {
    state.currentIndex = value;
  })

 
</script>

<template>
  <transition :name="transitionDir">
    <div class="car-item" v-if="state.selfIndex === state.currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
  .car-item {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    img { 
      width: 100%;
      height: 100%;
    }
  }

  .next-enter-active,
  .next-leave-active,
  .prev-enter-active,
  .prev-leave-active {
    transition: all 0.8s linear;
  }

  .next-enter-active {
    transform: translateX(100%);
  }

  .next-enter-to {
    transform: translateX(0);
  }
  
  .next-leave-active {
    transform: translateX(0);
  }

  .next-leave-to {
    transform: translateX(-100%);
  }
  .prev-enter-active {
    transform: translateX(-100%);
  }

  .prev-enter-to {
    transform: translateX(0);
  }
  
  .prev-leave-active {
    transform: translateX(0);
  }

  .prev-leave-to {
    transform: translateX(100%);
  }

 
</style>