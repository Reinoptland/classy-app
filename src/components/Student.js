import React, { Component } from "react";

// const updateStudent = () => {
//   this.setState({ present: true });
// };

export default class Student extends Component {
  state = {
    present: false,
    isNiceStudent: true,
  };

  updateStudent = () => {
    this.setState({ present: true });
  };

  render() {
    //   [present, setPresent] = useState(false)
    console.log(this.state);
    return (
      <div>
        <h2 style={{ color: this.state.present ? "green" : "red" }}>
          {this.props.name}
        </h2>
        <input
          type="checkbox"
          checked={this.state.present}
          onChange={this.updateStudent}
        />
      </div>
    );
  }
}
