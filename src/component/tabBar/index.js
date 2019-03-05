import React, { Component } from 'react'
import './index.scss'
import Goods from '../goods/index'

class Tab extends Component{
    constructor(props) {
      super(props)
      this.state = {
        tabList: [
          {id: 1, name: '菜单一'},
          {id: 2, name: '菜单二'},
          {id: 3, name: '菜单三'},
          {id: 4, name: '菜单四'},
        ],
        curIndex: 1
      }
    }
   // 属性初始化器语法
    changeMenuBtn = (item) => {
      this.setState({
        curIndex: item.id
      })
    }
    render() {
      return(
        <div className="tab_box">
          <ul className="tab_List">
            {
              this.state.tabList.map((item, index ) =>
                <li className={this.state.curIndex === item.id ? "tab_item_Active" : "tab_item"} key={index} onClick={this.changeMenuBtn.bind(this, item)}>{item.name}</li>
              )
            }
          </ul>
          <Goods curid={this.state.curIndex}/>
        </div>
      )
    }
}

export default Tab