import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StudentList from "./components/StudentList";

const students = ["rene", "maria", "zorana", "yasin"];
class App extends React.Component {
  state = {
    patients: [],
  };
  async componentDidMount() {
    // useEffect ? for class components
    const response = await fetch(
      "http://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
    );

    const json = await response.json();
    console.log(json);
    this.setState({ patients: [...this.state.patients, ...json] });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <StudentList students={students} />
          {this.state.patients.map((patient) => {
            return <li key={patient.id}>{patient.firstName}</li>;
          })}
        </header>
      </div>
    );
  }
}

export default App;
