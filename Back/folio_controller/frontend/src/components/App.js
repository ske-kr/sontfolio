import React, {Component} from "react";
import {render} from "react-dom";
import HomePage from "./Homepage";
import CreateProject from "./CreateProject";
import ProjectList from "./ProjectList";


export default class App extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
                <div className="header">
                    <h1>{this.props.name}'s portpolio</h1>
                </div>
                <div className="center">
                    <HomePage />
                </div>
            </div>
        );
    }
}

const appDiv=document.getElementById("app");
render(<App name="Son Kwangeun"/>,appDiv);