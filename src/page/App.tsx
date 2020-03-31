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
      firstName
    })
  };
  setLastName = (lastName: String) => {
    this.setState({
      lastName
    })
  };
  clickButton = () => {
    alert(this.state.firstName + ":" + this.state.lastName)
  };

  render() {
    return (
      <div className="app-body">
        <form>
          <Input className={"app-input"} inputText={this.state.firstName}
                 changed={this.setFirstName}/><label>first</label>
          <Input className={"app-input"} inputText={this.state.lastName} changed={this.setLastName}/><label>last</label>
          <Button className={"app-button"} buttonText={"hello"} clickButton={this.clickButton}/>
        </form>
      </div>
    );
  }
}

export default App;
