import React, { Component } from "react";
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import FormalEducation from "./components/FormalEducation";
import SelfEducation from "./components/SelfEducation";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CvContent from "./components/CvContent";

//import uniqid from 'uniqid';

class App extends Component {
    constructor(){
        super();

        this.state = {

        }
    }

    render(){
        return (
            <div>
                <Header />
                <PersonalInfo />
                <FormalEducation />
                <SelfEducation />
                <Experience />
                <Projects />
                <CvContent />
             </div>
        )
    }
}

export default App;