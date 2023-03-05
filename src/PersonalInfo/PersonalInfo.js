import React, { Component } from "react";

class PersonalInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            info: [],
            firstName: '',
            lastName: '',
            prefName: '',
            eMail: '',
            phoneNumber: '',
            address: '',
        }
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event, field){
        this.setState({[field]: event.target.value})
    }

    render(){
        const { firstName, lastName, prefName, eMail, phoneNumber, address } = this.state;
        return (
            <form>
                <h3>Personal Info</h3>
                <label>
                    <input type='text' placeholder='First Name' value={firstName.text} onChange={(event=>this.handleChange(event, 'firstName'))}/>
                </label>
                <label>
                    <input type='text' placeholder='Last Name' value={lastName.text} onChange={(event=>this.handleChange(event, 'lastName'))}/>
                </label>
                <label>
                    <input type='text' placeholder='Preferred Name' value={prefName.text} onChange={(event=>this.handleChange(event, 'prefName'))}/>
                </label>
                <label>
                    <input type='email' placeholder='E-Mail' value={eMail.text} onChange={(event=>this.handleChange(event, 'eMail'))}/>
                </label>
                <label>
                    <input type='text' placeholder='Phone Number' value={phoneNumber.text} onChange={(event=>this.handleChange(event, 'phoneNumber'))}/>
                </label>
                <label>
                    <input type='text' placeholder='Address' value={address.text} onChange={(event=>this.handleChange(event, 'address'))}/>
                </label>
                <input type='submit' value='Submit'/>

            </form>
        )
    }
}

export default PersonalInfo;