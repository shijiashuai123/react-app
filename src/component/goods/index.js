import React, {Component} from 'react'

class Goods extends Component{
    constructor(props) {
        // console.log(props)
        super();
        this.state= {
          itemResourceList: [
            {id: 1, name: "菜单1数据"},
            {id: 2, name: "菜单2数据"},
            {id: 3, name: "菜单3数据"},
            {id: 4, name: "菜单4数据"},
          ]
        }
    }
    // // 在组件接受到新的prop（更新后）调用
    // componentWillReceiveProps(newProps) {
    //   console.log("在组件接受到新的prop（更新后）调用")
    //   console.log(newProps)
    // }
    render() {
      return (
        <div>
          <p>{this.state.itemResourceList[this.props.curid -1].name}</p>
        </div>
      )
    }
}

export default Goods