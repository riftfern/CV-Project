import React, { Component } from "react";

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {
            projectName: '',
            projectDesc: '', 
            projectTech: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, field){
        this.setState({[field]: event.target.value})
    }

    render(){
        return (
            <form>
                 <h3>Projects</h3>
                 <label>
                    <input type='text' placeholder='Project Name' value={this.state.projectName} onChange={(event=>this.handleChange(event, 'projectName'))}/>
                 </label>
                 <label>
                    <input type='text' placeholder='Description' value={this.state.projectDesc} onChange={(event=>this.handleChange(event, 'projectDesc'))}/>
                 </label>
                 <label>
                    <input type='text' placeholder='Technologies Used' value={this.state.projectTech} onChange={(event=>this.handleChange(event, 'projectTech'))}/>
                 </label>
                 <input type='submit' value='Submit'/>
            </form>
        )
    }
}

export default Projects;