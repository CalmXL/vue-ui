<script setup>

const props = defineProps({
  itemLen: Number,
  hasDot: {
    type: Boolean,
    default: true
  },
  currentIndex: Number,
  dotBgColor: {
    type: String,
    default: '#ff5000'
  }
})

const emit = defineEmits(['dotClick'])

const dotClick = (index) => {
  emit('dotClick', index);
}

</script>

<template>
  <div class="dot-wrapper">
    <div 
      class="dot-item"
      v-for="item in itemLen"
      :key="item"
    >
      <a 
        href="javascript:;" 
        class="dot-lk"
        :style="{ backgroundColor: item === currentIndex ? dotBgColor: 'white'}"
        @click="dotClick(item)"
      ></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .dot-wrapper {
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    z-index: 10;

    .dot-item {
      float: left;
      margin: 0 5px;
      .dot-lk {
        display: inline-block;
        width: 8px;
        height: 8px;
        cursor: pointer;
        border-radius: 50%;
      }
    
    }
  }
</style>