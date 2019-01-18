import React, {Component} from 'react';
import './testscss.scss'
import SignIn from './login/index'
import Chart from './component/chart/chart'
import store from './store/index'
import Test from './component/test'

class App extends Component {
  constructor() {
    super()
    this.state = {
      judge:true
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
    var ele = null
    this.state.judge ? ele = <SignIn judge={this.state.judge} changeJudgeValue={this.changeJudge.bind(this)}/> : ele = <Chart />
    return (
      <div className="App">
        {ele}
        <Test />
      </div>
    );
  }
}

export default App;
