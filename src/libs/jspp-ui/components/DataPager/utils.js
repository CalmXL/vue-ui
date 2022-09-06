export function computedPageArr (state) {
  let arr = [];
  state.nextPageArr = [];
  if (state.allPages <= 7) {
    state.fEllipsisShow = false;
    state.lEllipsisShow = false;

    for (var i = 1; i <= state.allPages; i ++) {
      arr.push(i);
    }
    state.nextPageArr = [];
  } 

  if (state.allPages > 7 && state.curIdx < 5) {
    state.fEllipsisShow = false;
    state.lEllipsisShow = true;

    for (var i = 1; i <= 7; i ++) {
      arr.push(i);
    }

    state.nextPageArr = [];
  }

  if (state.allPages > 7 && state.curIdx >=5 && state.curIdx < state.allPages - 3 ) {
    state.fEllipsisShow = true;
    state.lEllipsisShow = true;
    
    arr = [1, 2];
    for (let i = 0; i < 5; i ++) {
      state.nextPageArr.push(state.curIdx + i - 1);
    }
  }

  if (state.allPages > 7 && state.curIdx >= state.allPages - 3) {
    state.fEllipsisShow = true;
    state.lEllipsisShow = false;

    arr = [1, 2];

    for (var i = 0; i < 5; i ++) {
      state.nextPageArr.push(state.allPages - 4 + i);
    }
  }

  return arr;
}