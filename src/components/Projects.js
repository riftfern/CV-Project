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
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = 
        this.setState({[field]: event.target.value})
    }

    render(){
        const { projectName, projectDesc, projectTech } = this.state; 
        return (
            <form>
                 <h3>Projects</h3>
                 <label>
                    <input type='text' placeholder='Project Name' value={projectName.text} onChange={(event=>this.handleChange(event, 'projectName'))}/>
                 </label>
                 <label>
                    <input type='text' placeholder='Description' value={projectDesc.text} onChange={(event=>this.handleChange(event, 'projectDesc'))}/>
                 </label>
                 <label>
                    <input type='text' placeholder='Technologies Used' value={projectTech.text} onChange={(event=>this.handleChange(event, 'projectTech'))}/>
                 </label>
                 <input type='submit' value='Submit'/>
            </form>
        )
    }
}

export default Projects;