import React, {Component} from 'react';
import './testscss.scss'
// import SignIn from './login/index'
// import Chart from './component/chart/chart'
import store from './store/index'
// import Test from './component/test'
import Tab from './component/tabBar/index'

class App extends Component {
  constructor() {
    super()
    this.state = {
      judge:true,
      testName: '这是父组件里stata的一个名称'
    }
  }
  changeJudge(value) {
    console.log(value)
    this.setState({
      judge: value
    })
    console.log(store.getState)
  }

  render() {
    // var ele = null
    // this.state.judge ? ele = <SignIn judge={this.state.judge} changeJudgeValue={this.changeJudge.bind(this)}/> : ele = <Chart />
    return (
      <div className="App">
        <Tab />
        {/*{ele}*/}
        {/*<Test name={this.state.testName}/>*/}
      </div>
    );
  }
}

export default App;
