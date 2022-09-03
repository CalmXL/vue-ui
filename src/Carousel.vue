<script setup>
  import { ref } from 'vue';
  import carData from './data/carousel';

  let dir = ref('next');
  // 更改图片方向
  const changeDir = (newDir) => {
    // 访问ref 需要访问value
    dir.value = newDir;
  }

</script>

<template>
  <div class="container">
    <carousel
      :autoPlay="true"
      autoPlayDirection="next"
      :durations="3000"
      :initial="1"
      :hasDot="true"
      :hasDirector="true"
      dotBgColor="hotpink"
      @changeDir="changeDir"
    >
      <car-item
        v-for="item of carData"
        :key="item.id"
        :transitionDir="dir"
      >
        <img 
          :src="`src/assets/imgs/${item.img_name}`" 
          :alt="item.img_name" 
        />
      </car-item>
    </carousel>
  </div>
</template>

<style lang="scss">
  html,
  body {
    margin: 0;
    padding: 0;
  }
  .container {
    width: 520px;
    height: 230px;
    margin: 50px auto;

    img {
      width: 100%;
      height: 100%;
    }
  }

 
</style>