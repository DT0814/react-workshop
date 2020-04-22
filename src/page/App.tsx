import React, {Component} from 'react';
import './App.css'
import Input from "../components/Input";
import Button from "../components/Button";
import Radio from "../components/Radio";
import Select from "../components/Select";

let provinceCity = new Map();
provinceCity.set("ShanXi", ['Xian', 'WeiNan', 'LinTong']);
provinceCity.set("heilongjiang", ['jixi', 'haerbin', 'daqing']);
provinceCity.set("ZheJiang", ['HangZhou', 'NiBo', 'JiaXing']);

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    genderSelectedName: "male",
    currentProvince: "ShanXi",
    currentCity: "xian"
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
      genderSelectedName: genderSelectedName
    })
  };
  setProvince = (provinceName: String) => {
    this.setState({
      currentProvince: provinceName
    })
  };
  setCity = (cityName: String) => {
    this.setState({
      currentCity: cityName
    })
  };
  clickButton = () => {
    alert("hello: " + this.state.genderSelectedName + "  " + this.state.firstName + " " + this.state.lastName)
  };

  render() {
    return (
      <div className="app-body">
        <form>
          <Input className={"app-input"} inputText={this.state.firstName}
                 changed={this.setFirstName}/><label>first</label>
          <Input className={"app-input"} inputText={this.state.lastName} changed={this.setLastName}/><label>last</label>
          <Button className={"app-button"} buttonText={"hello"} clickButton={this.clickButton}/>
          <Radio className={"app-radio"} radioName={"gender"} selectedName={this.state.genderSelectedName}
                 changed={this.setRadioName} values={this.genderValue}></Radio>
          <Select className={"app-radio"} selectName='Province' values={Array.from(provinceCity.keys())}
                  changed={this.setProvince} selected={this.state.currentProvince}></Select>
          <Select className={"app-radio"} selectName='City' values={provinceCity.get(this.state.currentProvince)}
                  changed={this.setCity} selected={this.state.currentCity}></Select>

        </form>
      </div>
    );
  }
}

export default App;
