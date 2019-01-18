// 创建action action也是函数
export function setTest1(data) {
  return (dispatch, getState) => {
    dispatch({type: 'SET_PAGE_TEST1', data: data})
  }
}

export function setTest2(data) {
  return (dispatch, getState) => {
    dispatch({type: 'SET_PAGE_TEST2', data: data})
  }
}