# UI 组件库

## 1. 轮播图组件
  1. autoPlay="true" 自动轮播配置
  2. autoPlayDirection="next" 自动轮播方向
  3. durations="3000" 轮播一次时间
  4. initial="1" 初始图片
  5. hasDot="true" 是否显示指示原点
  6. hasDirector="true" 显示方向按键
  7. dotBgColor="hotpink" 圆点背景颜色

## Selector 分析

  1. input 组件 - placeholder icon input
  2. menu 组件 - list listItem data
  3. NoDataTip提示组件  

## 分页组件

  1. pageNum 
    上下页 + btn点击

  2. pageSkip
    跳转页面

## Transfer 

1. 数据隔离
  1. leftListData 
  2. rightListData
  3. checkedData: left, right 用于存储选中的数据

2. hooks思想抽离组件中的逻辑


## Stars组件

1. 五星组件 -> 初始num 显示星星数量,
              满星： decimals >= 0.7 , toFixed(四舍五入) : Math.floor(向下取整)
              半星：通过小数部分, 0.3 - 0.6之间算作半星
              空星：decimals <= 0.3

2. 点击更改星星变化
  通过鼠标点击位置， 计算点击位置/ 每个元素的宽度(设置的size + margin + padding)
    size 是行内样式 
    margin， padding -> window.getComputedStyle(elem, '伪元素')分别获取
  
  计算出数值， 更新 starCurrNum -> 更新 starsStyle(计算属性)

3. 通过hooks 抽离组件中的逻辑，组件内代码更清晰、整洁。 

