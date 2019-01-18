// Test.jsx
import React, { Component } from 'react'

// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux'

// 引入action
import { setTest1 } from '../store/action.js'

class Test extends Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.state = {
      name: '这是测试组件'
    }
  }
  componentDidMount () {
    console.log(this.props)
    let { setTest1 } = this.props

    // setTest1 action
    setTest1('新的标题')
  }
  changeTest1Btn() {
    setTest1('再次新的标题')
  }
  render () {
    // 从props中解构store
    let { test1 } = this.props

    // 使用store
    return (
      <div>
        <h1>{test1}</h1>
        <button onClick={this.changeTest1Btn.bind(this)}>点击</button>
      </div>
    )
  }
}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
  console.log(state)
  return {
    test1: state.test1
  }
}
// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setTest1 (data) {
      console.log(data)
      // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
      dispatch(setTest1(data))
      // 执行setPageTitle会返回一个函数
      // 这正是redux-thunk的所用之处:异步action
      // 上行代码相当于
      /*dispatch((dispatch, getState) => {
          dispatch({ type: 'SET_PAGE_TITLE', data: data })
      )*/
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Test)