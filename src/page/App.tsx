import React, {Component} from 'react';
import './App.css'
import Input from "../components/Input";
import Button from "../components/Button";

class App extends Component {
  state = {
    firstName: "",
    lastName: ""
  };
  setFirstName = (firstName: String) => {
    this.setState({
      ...this.state,
      firstName
    })
  };
  setLastName = (lastName: String) => {
    this.setState({
      ...this.state,
      lastName
    })
  };
  clickButton = () => {
    alert(this.state.firstName + ":" + this.state.lastName)
  };

  render() {
    return (
      <div className="app-body">
        <Input className={"app-input"} inputText={this.state.firstName}
               changed={this.setFirstName}/><label>first</label>
        <Input className={"app-input"} inputText={this.state.lastName} changed={this.setLastName}/><label>last</label>
        <Button className={"app-button"} buttonText={"hello"} clickButton={this.clickButton}/>
      </div>
    );
  }
}

export default App;
