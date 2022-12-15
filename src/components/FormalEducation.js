import React, { Component } from "react";

class FormalEducation extends Component{
    constructor(props){
        super(props);
        this.state = {
            schoolName: '',
            degreeName: '', 
            graduationDate: '', 
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
                 <h3>Formal Education</h3>
                 <label>
                    <input type='text' placeholder='School Name' value={this.state.schoolName} onChange={(event=>this.handleChange(event, 'projectName'))}/>
                 </label>
                 <label>
                    <input type='text' placeholder='Degree Name/Type' value={this.state.degreeName} onChange={(event=>this.handleChange(event, 'projectName'))}/>
                 </label>
                 <label>
                    <input type='text' placeholder='Graduation Date' value={this.state.graduationDate} onChange={(event=>this.handleChange(event, 'projectName'))}/>
                 </label>
                 <input type='submit' value='Submit'/>
            </form>
        )
    }
}

export default FormalEducation;