import React from 'react';

class InputProp {
  public className: String;
  public inputText: String;
  public changed: (value: String) => void;

  constructor(className: String, inputText: String, changed: (value: String) => void) {
    this.className = className;
    this.inputText = inputText;
    this.changed = changed;
  }
}

const Input = (prop: InputProp) => {
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    prop.changed(e.currentTarget.value);
  };
  return (
    <div>
      <input className={prop.className.toString()} value={prop.inputText.toString()} width={20} onChange={onChange}/>
    </div>
  );
};

export default Input;
