import React, {Component} from 'react';
import './testscss.scss'
import SignIn from './login/index'
import Chart from './component/chart/chart'

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
  }

  render() {
    var ele = null
    this.state.judge ? ele = <SignIn judge={this.state.judge} changeJudgeValue={this.changeJudge.bind(this)}/> : ele = <Chart />
    return (
      <div className="App">
        {ele}
      </div>
    );
  }
}

export default App;
