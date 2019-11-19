import React, { Component,Fragment } from 'react'
import Tab from '../components/tab'
import Tabbar from '../components/tabbar'
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'
import Home from '../pages/home'

 class LayOut extends Component {
  constructor(props) {
    super(props)
    
    this.state = {   
    }
  }

  render() {
    return (
      <Fragment>
        <Tab></Tab>
        <Switch>
          {/* <Redirect from="/" to="/home" exact></Redirect> */}
          <Route path="/home" component={Home}></Route>
        </Switch>
        <Tabbar></Tabbar>
      </Fragment>
    )
  }
}

export default withRouter(LayOut)