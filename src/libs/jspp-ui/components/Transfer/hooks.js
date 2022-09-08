import { ref, computed, reactive } from 'vue';

export function useTargetIndex (initialIndex) {
  const targetIndex = ref(initialIndex);

  function setTargetIndex (newIndex) {
    targetIndex.value = newIndex;
  }

  return [
    targetIndex,
    setTargetIndex
  ]
}

export function useRightListData (initialData, checkedData) {
  const rightListData = ref(initialData);

  function addRightListData (newData) {

    // newData = filterNewData(newData);
    
    // rightListData.value = [
    //   ...rightListData.value,
    //   ...newData
    // ]

    rightListData.value =Array.from(new Set([
      ...rightListData.value,
      ...newData
    ]));

    checkedData.left = [];
  }

  function removeRightListData (newData) {
    newData.forEach(item => {
      rightListData.value = rightListData.value.filter(({id}) => item.id !== id); 
    })

    checkedData.right = [];
  }

  function filterNewData (newData) {
    let newArr = [];
    newData.forEach(item => {
      !rightListData.value.includes(item) && newArr.push(item);
    });

    return newArr;
  }

  return [
    rightListData,
    addRightListData,
    removeRightListData
  ]
}

export function useCheckData () {
  const checkedData = reactive({
    left: [],
    right: []
  });

  function setCheckedData (checked, leftOrRight, item) {
    checked ? addCheckedData(leftOrRight, item)
            : removeCheckedData(leftOrRight, item.id);
  }

  function addCheckedData (leftOrRight, item) {
    switch (leftOrRight) {
      case 'left':
        checkedData.left.push(item);
        break;
      case 'right':
        checkedData.right.push(item);
        break;
      default:
        break;
    }
  }

  function removeCheckedData (leftOrRight, id) {
    switch (leftOrRight) {
      case 'left':
        checkedData.left = checkedData.left.filter(item => item.id !== id);
        break;
      case 'right':
        checkedData.right = checkedData.right.filter(item => item.id !== id);
        break;
      default:
        break;
    }
  }

  

  return [
    checkedData,
    setCheckedData
  ]
  
}

export function useDragedItem () {
  const dragItem = ref(null);

  function setDragedItem (item) {
    dragItem.value = item;
  }

  return [
    dragItem,
    setDragedItem
  ]
}

export function useComputeData (data, targetIndex, rightListData, checkedData) {

  const leftTitle = computed(() => data[targetIndex.value].title);

  const leftListData = computed(() => {
    const { data: currentData } = data[targetIndex.value];

    return currentData.filter(item => {
      if (!rightListData.value.find(({ id }) => item.id === id)) {
        return item;
      }
    })
  });

  const transferButtonDisabled = computed(() => ({
    left: checkedData.right.length === 0,
    right: checkedData.left.length === 0
  }));

  return {
    leftTitle,
    leftListData,
    transferButtonDisabled
  }
}