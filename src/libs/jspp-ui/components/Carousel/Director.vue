<script setup>
  
  const emit = defineEmits(['dirClick']);
  
  const dirClick = (dir) => {
    emit('dirClick', dir);
  } 

  const props = defineProps({
    dir: String
  })
  
</script>

<template>
  <div class="director dir-next" v-if="dir === 'next'">
    <a 
      href="javascript:;"
      @click="dirClick(dir)"
    >
      &gt
    </a>
  </div>
  <div class="director dir-prev" v-else="dir === 'prev'">
    <a 
      href="javascript:;"
      @click="dirClick(dir)"
    >
      &lt
    </a>
  </div>
</template>

<style lang="scss" scoped>
  .director {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background-color: #aaa;
    z-index: 10;

    &.dir-next{
      right: 0;
    }

    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      color: #fff;
      font-size: 20px;
      text-align: center;
    }
  }
</style>