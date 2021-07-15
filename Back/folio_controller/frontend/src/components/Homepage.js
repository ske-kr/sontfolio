import React, {Component} from "react";
import CreateProject from "./CreateProject";
import ProjectList from "./ProjectList";
import { BrowserRouter as Router, Switch, Route,Link,Redirect } from "react-router-dom"
import Project from "./Project";
import ProjectJoinPage from "./ProjectJoinPage";
export default class HomePage extends Component{
    constructor(props){
        super(props);

    }

    render() {
        return (
          <Router>
            <Switch>
              <Route exact path="/">
                <p>This is the home page</p>
              </Route>
              <Route path="/list" component={ProjectList} />
              <Route path="/create" component={CreateProject} />
              <Route path="/project/:projectCode" component={Project}/>
              <Route path="/join" component={ProjectJoinPage}/>
            </Switch>
          </Router>
        );
      }
}