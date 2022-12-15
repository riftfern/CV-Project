import React, { Component } from "react";

class Experience extends Component{
    constructor(props){
        super(props);
        this.state = {
            companyName: '',
            jobTitle: '', 
            startDate: '',
            endDate: '',
            duties: '', 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, field){
        this.setState({[field]: event.target.value})
    }

    render(){
        return (
            <form>
                 <h3>Experience</h3>
                 <label>
                    <input type='text' placeholder='Company Name' value={this.state.companyName} onChange={(event=>this.handleChange(event, 'companyName'))}/>
                 </label>
                 <label>
                    <input type='text' placeholder='Job Title' value={this.state.jobTitle} onChange={(event=>this.handleChange(event, 'jobTitle'))}/>
                 </label>
                 <label>
                    <input type='text' placeholder='Start Date' value={this.state.startDate} onChange={(event=>this.handleChange(event, 'startDate'))}/>
                 </label>
                 <label>
                    <input type='text' placeholder='End Date' value={this.state.endDate} onChange={(event=>this.handleChange(event, 'endDate'))}/>
                 </label>
                 <label>
                    <input type='text' placeholder='Job Duties' value={this.state.duties} onChange={(event=>this.handleChange(event, 'jobDuties'))}/>
                 </label>
                 <input type='submit' value='Submit'/>
            </form>
        )
    }
}

export default Experience;