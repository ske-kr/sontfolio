import React, {Component} from "react";
import CreateProject from "./CreateProject";
import ProjectList from "./ProjectList";
import { BrowserRouter as Router, Switch, Route,Link,Redirect } from "react-router-dom"
import Project from "./Project";
import ProjectJoinPage from "./ProjectJoinPage";
import { Grid,Button,ButtonGroup,Typography } from "@material-ui/core";

export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={
          projectCode:null,
        };

    }
    /*
    async componentDidMount(){
      fetch('/api/user-in-project').then((response)=>response.json())
      .then((data)=>{
        this.setState({
          projectCode:data.code,
        });
      });
      console.log(this.state.projectCode);
    }
    */
    clearProjectcode(){
      this.setState({
        projectCode:null,
      });
    }
    renderHomePage(){
      return (
        <Grid contrainer spacing={3}>
          <Grid item xs={12} align="center">
            <Typography variant="h3" compact="h3">
              Kwangeun's Project
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <ButtonGroup disableElevation variant="contained" color="primary">
              <Button color="primary" to='/join' component={Link}>
                Join a Project
              </Button>
              <Button color="secondary" to='/create' component={Link}>
                Create a Project
              </Button> 
            </ButtonGroup>
          </Grid>
        </Grid>
      );
    }

    render() {
        return (
          <Router>
            <Switch>
              <Route exact path="/" 
              render={() => {
                return this.state.projectCode ? (
                  <Redirect to={`/project/${this.state.projectCode}`} />
                ) : (
                  this.renderHomePage()
                );
              }}
              />
              <Route path="/list" component={ProjectList} />
              <Route path="/create" component={CreateProject} />
              <Route path="/project/:projectCode" 
              component={Project}/>
              <Route path="/join" component={ProjectJoinPage}/>
            </Switch>
          </Router>
        );
      }
}