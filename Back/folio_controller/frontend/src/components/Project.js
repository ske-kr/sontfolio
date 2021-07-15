import React, {Component} from "react";


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

    render(){
        return <div>
            <h3> {this.projectCode}</h3>
            <p>
                Project Name : {this.state.name}
            </p>
            <p> Team : {this.state.team}</p>
            <p> Keyword : {this.state.keyword}</p>
            <p> Details : {this.state.details}</p>
        </div>;
    }
}