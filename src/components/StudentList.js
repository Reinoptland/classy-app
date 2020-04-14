import React, { Component } from "react";
import Student from "./Student";

export default class StudentList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.students.map((student) => {
          return <Student key={student} name={student} />;
        })}
      </div>
    );
  }
}
