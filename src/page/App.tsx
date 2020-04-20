import React, {Component} from 'react';
import './App.css'
import Input from "../components/Input";
import Button from "../components/Button";
import Radio from "../components/Radio";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    genderSelectedName: "male"
  };

  genderValue = ['male', 'female'];

  setFirstName = (firstName: String) => {
    this.setState({
      firstName
    })
  };
  setLastName = (lastName: String) => {
    this.setState({
      lastName
    })
  };
  setRadioName = (genderSelectedName: String) => {
    this.setState({
      genderSelectedName:genderSelectedName
    })
  };
  clickButton = () => {
    alert("hello: "+this.state.genderSelectedName+"  "+this.state.firstName + " " + this.state.lastName)
  };

  render() {
    return (
      <div className="app-body">
        <form>
          <Input className={"app-input"} inputText={this.state.firstName}
                 changed={this.setFirstName}/><label>first</label>
          <Input className={"app-input"} inputText={this.state.lastName} changed={this.setLastName}/><label>last</label>
          <Button className={"app-button"} buttonText={"hello"} clickButton={this.clickButton}/>
          <Radio className={"app-radio"} radioName={"gender"} selectedName={this.state.genderSelectedName} changed={this.setRadioName} values={this.genderValue}></Radio>
        </form>
      </div>
    );
  }
}

export default App;
