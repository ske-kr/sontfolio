import React, {Component} from "react";
import { TextField,Button,Grid,Typography } from "@material-ui/core";
import {Link} from "react-router-dom";


export default class ProjectJoinPage extends Component{
    constructor(props){
        super(props);
        this.state={
            ProjectCode:"",
            error:"",
            name:""
        }
    }

    render(){
        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography variant="h4" component="h4">
                        Join a Project
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <TextField 
                        error={this.state.error}
                        label="Code"
                        placeholder="Enter a Project Code"
                        value={this.state.ProjectCode}
                        helperText={this.state.error}
                        variant="outlined"
                        onChange={this._handleTextFieldChange}
                    />
                </Grid>
                <Grid item xs={12} align="center">
                    <TextField 
                        label="Name"
                        placeholder="Enter Your Name"
                        value={this.state.name}
                        variant="outlined"
                        onChange={this._handleNameChange}
                    />
                </Grid>
                <Grid item xs={12} align="center">
                    <Button variant="contained" color="primary" onClick={this._projectButtonPressed}>
                        Participate
                    </Button>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button variant="contained" color="secondary" to="/" component={Link}>
                        Back
                    </Button>
                </Grid>
            </Grid>
        );
    }


    _handleTextFieldChange=(e)=>{
        this.setState({
            ProjectCode:e.target.value
        });
    }

    _projectButtonPressed=()=>{
        const resquestOptions ={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                code:this.state.ProjectCode,
                name:this.state.name
            })
        };
        fetch('/api/join',resquestOptions).then((response)=>{
            if (response.ok){
                this.props.history.push(`/project/${this.state.ProjectCode}`)
            }else{
                this.setState({
                    error:"Project Not Found."
                }).catch((error)=>{
                    console.log(error);
                });
            }
        });
    }
    _handleNameChange=(e)=>{
        this.setState({
            name:e.target.value
        });
    }
}