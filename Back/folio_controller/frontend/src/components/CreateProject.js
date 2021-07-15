import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { responsiveFontSizes } from "@material-ui/core";

export default class CreateProject extends Component{
    constructor(props){
        super(props);
        this.state={
            type:true,
            name:"",
            team:"",
            keyword:"",
            details:"",
        };

        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleTeamChange=this.handleTeamChange.bind(this);
        this.handleProjectButtonPressed=this.handleProjectButtonPressed.bind(this);
    }

    handleTypeChange=(e)=>{
        this.setState({
            type:e.target.value,
        });
    }
    handleNameChange(e){
        this.setState({
            name:e.target.value,
        });
    }
    handleTeamChange(e){
        this.setState({
            team:e.target.value,
        });
    }
    handleKeywordsChange=(e)=>{
        this.setState({
            keyword:e.target.value,
        });
    }
    handleDetailsChange=(e)=>{
        this.setState({
            details:e.target.value,
        });
    }
    handleProjectButtonPressed(){
        const requestOptions={
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                type:this.state.type,
                name:this.state.name,
                team:this.state.team,
                keyword:this.state.keyword,
                details:this.state.details
            })
        };
        fetch('/api/create',requestOptions).then((response)=>
            response.json()
        ).then((data)=>console.log(data));
    }
    render(){
        return <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component='h4' variant='h4'>
                    Create Project
                </Typography>

            </Grid>

            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <FormHelperText>
                        <div align="center">
                            Project Type

                        </div>
                    </FormHelperText>
                    <RadioGroup
                        row
                        defaultValue="true"
                        onChange={this.handleTypeChange}
                    >
                        <FormControlLabel
                            value="true"
                            control={<Radio color="primary" />}
                            label="Web development"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="false"
                            control={<Radio color="secondary" />}
                            label="etc.."
                            labelPlacement="bottom"
                        />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField require={true}
                    onChange={this.handleNameChange} 
                    inputProps={{
                        style:{
                            textAlign:"center"
                        },
                    }}
                    />
                    <FormHelperText>
                        <div align="center">
                            Project Name
                        </div>
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField require={true} 
                    onChange={this.handleTeamChange}
                    inputProps={{
                        style:{
                            textAlign:"center"
                        },
                    }}
                    />
                    <FormHelperText>
                        <div align="center">
                            Team
                        </div>
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField require={true} 
                    onChange={this.handleKeywordsChange}
                    inputProps={{
                        style:{
                            textAlign:"center"
                        },
                    }}
                    />
                    <FormHelperText>
                        <div align="center">
                            Keyword
                        </div>
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField require={true}
                    onChange={this.handleDetailsChange} 
                    inputProps={{
                        style:{
                            textAlign:"center"
                        },
                    }}
                    />
                    <FormHelperText>
                        <div align="center">
                            Details
                        </div>
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleProjectButtonPressed}
          >
            Create A Project
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="secondary" variant="contained" to="/" component={Link}>
            Back
          </Button>
        </Grid>
        </Grid> ;
    }
}