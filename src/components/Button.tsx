import React from 'react';

class ButtonProp {
  public className: String;
  public buttonText: String;
  public clickButton: () => void;

  constructor(className: String, buttonText: String, clickButton: () => void) {
    this.className = className;
    this.buttonText = buttonText;
    this.clickButton = clickButton;
  }
}

const Button = (prop: ButtonProp) => {
  return (
    <div>
      <button className={prop.className.toString()} onClick={prop.clickButton}>{prop.buttonText}</button>
    </div>
  );
};

export default Button;
