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
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, field){
        this.setState({[field]: event.target.value})
    }

    render(){
        const { companyName, jobTitle, startDate, endDate, duties } = this.state;
        return (
            <form>
                 <h3>Experience</h3>
                 <label>
                    <input type='text' placeholder='Company Name' value={companyName.text} onChange={(event=>this.handleChange(event, 'companyName'))}/>
                 </label>
                 <label>
                    <input type='text' placeholder='Job Title' value={jobTitle.text} onChange={(event=>this.handleChange(event, 'jobTitle'))}/>
                 </label>
                 <label>
                    <input type='text' placeholder='Start Date' value={startDate.text} onChange={(event=>this.handleChange(event, 'startDate'))}/>
                 </label>
                 <label>
                    <input type='text' placeholder='End Date' value={endDate.text} onChange={(event=>this.handleChange(event, 'endDate'))}/>
                 </label>
                 <label>
                    <input type='text' placeholder='Job Duties' value={duties.text} onChange={(event=>this.handleChange(event, 'jobDuties'))}/>
                 </label>
                 <input type='submit' value='Submit'/>
            </form>
        )
    }
}

export default Experience;