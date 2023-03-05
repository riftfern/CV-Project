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
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, field){
        this.setState({[field]: event.target.value})
    }

    render(){
        const { schoolName, degreeName, graduationDate } = this.state;
        return (
            <form>
                 <h3>Formal Education</h3>
                 <label>
                    <input type='text' placeholder='School Name' value={schoolName.text} onChange={(event=>this.handleChange(event, 'projectName'))}/>
                 </label>
                 <label>
                    <input type='text' placeholder='Degree Name/Type' value={degreeName.text} onChange={(event=>this.handleChange(event, 'projectName'))}/>
                 </label>
                 <label>
                    <input type='text' placeholder='Graduation Date' value={graduationDate.text} onChange={(event=>this.handleChange(event, 'projectName'))}/>
                 </label>
                 <input type='submit' value='Submit'/>
            </form>
        )
    }
}

export default FormalEducation;