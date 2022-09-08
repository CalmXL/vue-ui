<script setup>
  import SelectTransfer from './components/Select.vue';
  import ListTitle from './components/ListTitle.vue';
  import ListItem from './components/ListItem.vue';
  import ButtonGroup from './components/ButtonGroup.vue';

  import { 
    useTargetIndex, 
    useComputeData,
    useRightListData,
    useCheckData,
    useDragedItem
  } from './hooks';

  const props = defineProps({
    data: {
      type: Array,
      default: () => []
    },
    rightTitle: {
      type: String,
      default: () => '已选择'
    }
  });

  const [ targetIndex, setTargetIndex ] = useTargetIndex(0);

  const [
    checkedData,
    setCheckedData
  ] = useCheckData();

  const [
    rightListData,
    addRightListData,
    removeRightListData
  ] = useRightListData([], checkedData);

  const { 
    leftTitle,
    leftListData,
    transferButtonDisabled
  } = useComputeData(props.data, targetIndex, rightListData, checkedData);

  const [
    dragItem,
    setDragItem
  ] = useDragedItem();

  const options = props.data.map(({ title }) => title);

</script>

<template>

  <div class="transfer-wrap">
    <select-transfer
      :data="options"
      @setTargetIndex="setTargetIndex"
    ></select-transfer>
    <div class="transfer">
      <div 
        class="box left-list"
        @dragover.prevent
        @drop="removeRightListData([ dragItem ])"
      >
        <list-title :title="leftTitle"></list-title>
        <div>
          <list-item 
            :listData="leftListData"
            leftOrRight="left"
            @setCheckedData="setCheckedData"
            @dragItem="setDragItem"
          ></list-item>
        </div>
      </div>
      <button-group
        :btnDisabled="transferButtonDisabled"
        :checkedData="checkedData"
        @addRightListData="addRightListData"
        @removeRightListData="removeRightListData"
      ></button-group>
      <div 
        class="box right-list"
        @dragover.prevent
        @drop="addRightListData([ dragItem ])"
      >
        <list-title :title="rightTitle"></list-title>
        <div>
          <list-item 
            :listData="rightListData"
            leftOrRight="right"
            @setCheckedData="setCheckedData"
            @dragItem="setDragItem"
          ></list-item>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .transfer-wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  .transfer {
    display: flex;
    flex-direction: row;
    width: 360px;
    height: 300px;
    border: solid 1px #000;

    .box  {
      width: 120px;
      height: 100%;

     
    }
  }
  }
</style>