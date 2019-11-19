import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {get_home} from '../../actions'

class Home extends Component {
  render() {
    const {get_home,data} =this.props
    return (
      <div>
        <button onClick={get_home}>获取数据</button>
        <p>{data}</p>
      </div>
    )
  }
}

const mapStateFromProps=state=>{
  return{
    count:state.homeState.data
  }
}

const mapDispatchFromProps=dispatch=>{
  return bindActionCreators({get_home},dispatch)
}

export default connect(mapStateFromProps,mapDispatchFromProps)(Home)