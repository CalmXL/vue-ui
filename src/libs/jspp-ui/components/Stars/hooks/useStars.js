import { ref, computed } from 'vue';

export function useStars (num, size) {

  const starsCurrNum = ref(num);

  const setStarsCurrNum = (e) => {
    const marginRight = Number(window.getComputedStyle(e.target, '::before').marginRight.replace(/px$/, ''));
    const mouseX = e.offsetX;
    starsCurrNum.value = mouseX / (Number(size) + marginRight);
    console.log(starsCurrNum.value);
  };

  const starsStyle = computed(() => {
    // 计算 activeNum(满星)、 
    // halfNum(半星 30% - 70% 计算鼠标点击位置位于盒子的比例， 计算computedNum)、 
    // nullNum(空星)
    const starNum = starsCurrNum.value;
    const starInt = Math.floor(starNum);
    const starDecimals = starNum - starInt;
    const isHalf = starDecimals > 0.3 && starDecimals < 0.6;

    const activeNum = starDecimals < 0.6 ? Math.floor(starNum) : starNum.toFixed(); 
    const halfNum = isHalf ? 1 : 0;
    const nullNum = 5 - Math.ceil(starNum);
    let arr = new Array(5);

    arr.fill('active', 0, activeNum);
    halfNum && arr.fill('half', activeNum, 5 - nullNum);
    
    return arr;
  });


  return [
    setStarsCurrNum,
    starsStyle
  ]
}