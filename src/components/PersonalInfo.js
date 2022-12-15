import React, { Component } from "react";

class PersonalInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            prefName: '',
            eMail: '',
            phoneNumber: '',
            address: '',
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
                <h3>Personal Info</h3>
                <label>
                    <input type='text' placeholder='First Name' value={this.state.firstName} onChange={(event=>this.handleChange(event, 'firstName'))}/>
                </label>
                <label>
                    <input type='text' placeholder='Last Name' value={this.state.lastName} onChange={(event=>this.handleChange(event, 'lastName'))}/>
                </label>
                <label>
                    <input type='text' placeholder='Preferred Name' value={this.state.prefName} onChange={(event=>this.handleChange(event, 'prefName'))}/>
                </label>
                <label>
                    <input type='email' placeholder='E-Mail' value={this.state.eMail} onChange={(event=>this.handleChange(event, 'eMail'))}/>
                </label>
                <label>
                    <input type='text' placeholder='Phone Number' value={this.state.phoneNumber} onChange={(event=>this.handleChange(event, 'phoneNumber'))}/>
                </label>
                <label>
                    <input type='text' placeholder='Address' value={this.state.address} onChange={(event=>this.handleChange(event, 'address'))}/>
                </label>
                <input type='submit' value='Submit'/>

            </form>
        )
    }
}

export default PersonalInfo;