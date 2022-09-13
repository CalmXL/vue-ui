<script setup>
import { useStars } from './hooks';

  const props = defineProps({
    num: Number,
    size: Number
  });

  const [ 
    setStarsCurrNum,
    starsStyle
  ] = useStars(props.num, props.size);
  // const currentNum = ref(Number(props.num));

  // const starsStyle = computed(() => {
  //   let arr = [];
  //   for (var i = 1; i <= 5; i ++) {
  //     if (props.num > i) {
  //       arr.push('active');
  //     } else if (props.num > i - 1 && props.num < i && props.num % (i-1) >= 0.5) {
  //       arr.push('half');
  //     } else {
  //       arr.push('');
  //     }
  //   }

  //   return arr;
  // });


  // const starsStyle = computed(() => {
  //   // 计算 activeNum、 halfNum、 nullNum
  //   const activeNum = currentNum.value.toFixed();
  //   const halfNum = (currentNum.value - activeNum) >= 0.3 && (currentNum.value - activeNum < 0.7)? 1 : 0;
  //   const nullNum = 5 - Math.ceil(currentNum.value);
  //   let arr = new Array(5);

  //   arr.fill('active', 0, activeNum);
  //   halfNum && arr.fill('half', activeNum, 5 - nullNum);

  //   return arr;
  // });

  // const setStars = (size, e) => {
  //   const marginRight = Number(window.getComputedStyle(e.target).marginRight.replace(/px$/, ''));
  //   const mouseX = e.offsetX;

  //   currentNum.value = mouseX / (Number(props.size) + marginRight);

    // for (var i = 0; i < starLen; i ++) {
    //   var item = oStars[i];
    //   if (i <= idx) {
    //     item.className = 'iconfont icon-star active';
    //   } else {
    //     item.className = 'iconfont icon-star';
    //   }
    // }
  // }

</script>

<template>
  <div class="stars">
    <i 
      v-for="(item, index) of starsStyle"
      :class="['iconfont', 'icon-star', item]"
      :key="index"
      :style="{ 'font-size': size + 'px'}"
      @click="setStarsCurrNum($event)"
    ></i>
  </div>
</template>

<style lang="scss" scoped>
  .stars {
    margin-left: 10px;
    .icon-star {
      color: #ccc;
      margin-right: 3px;

      &.active {
        color: #FFA940;
      }

      &.half{
        // linear-gradient 线性梯度
        background: linear-gradient(to right, #FFA940 50%, #ccc 0);
        // 背景被裁剪成文字的前景色
        background-clip: text;
        -webkit-background-clip: text;
        // 属性指定文本字符的填充颜色. 如果未设置此属性， color 则使用该属性的值。
        -webkit-text-fill-color: transparent;
      }
    }


  }
</style>