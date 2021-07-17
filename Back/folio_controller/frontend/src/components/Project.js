import React, {Component} from "react";
import {Grid,Button,Typography} from "@material-ui/core";
import {Link} from "react-router-dom"

export default class Project extends Component{
    constructor(props){
        super(props);
        this.state={
            type:true,
            name:"",
            team:"",
            keyword:"",
            details:"",
        };
        this.projectCode=this.props.match.params.projectCode;
        this.getProjectDetails();
    }
    getProjectDetails(){
        fetch('/api/get' + '?code=' + this.projectCode).then((response)=> response.json())
        .then((data)=>{
            this.setState({
                name:data.name,
                team:data.team,
                keyword:data.keyword,
                details:data.details
            });
        });
    }

    leaveButtonPressed=()=> {
        fetch("/api/del"+'?code=' + this.projectCode).then((_response) => {
          this.props.history.push("/");
        });
      }

    render(){
        return <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography variant="h4" component="h4">
                    Code : {this.projectCode}
                </Typography>
            </Grid>

            <Grid item xs={12} align="center">
                <Typography variant="h4" component="h4">
                    Project Name : {this.state.name}
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Typography variant="h6" component="h4">
                    Team : {this.state.team}
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
            <Typography variant="h6" component="h4">
                    Keyword : {this.state.keyword}
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
            <Typography variant="h7" component="h4">
                    Details : {this.state.details}
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="primary" variant="contained" to="/" component={Link}>
                    Home
                </Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="secondary" variant="contained" onClick={this.leaveButtonPressed}>
                    Delete Project
                </Button>
            </Grid>

        </Grid>
    }
}

/*
<div>
            <h3> {this.projectCode}</h3>
            <p>
                Project Name : {this.state.name}
            </p>
            <p> Team : {this.state.team}</p>
            <p> Keyword : {this.state.keyword}</p>
            <p> Details : {this.state.details}</p>
        </div>;
*/