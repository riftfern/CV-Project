import React, { Component } from "react";

class SelfEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bootCampName: "",
      courseOfStudy: "",
      startDate: "",
    };
    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  render() {
    const { bootCampName, courseOfStudy, startDate } = this.state;
    return (
      <form>
        <h3>Self Education</h3>
        <label>
          <input
            type="text"
            placeholder="Boot-Camp/Program Name"
            value={bootCampName.text}
            onChange={(event) => this.handleChange(event, "bootCampName")}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Course Of Study"
            value={courseOfStudy.text}
            onChange={(event) => this.handleChange(event, "courseOfStudy")}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Start Date"
            value={startDate.text}
            onChange={(event) => this.handleChange(event, "startDate")}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SelfEducation;
