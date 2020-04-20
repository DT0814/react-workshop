import React from 'react';

type RadioProps = {
  className:String
  radioName: string;
  selectedName: string;
  values: Array<string>;
  changed: (value:String) => void;
};
const Radio = (prop: RadioProps) => {
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    prop.changed(e.currentTarget.value);
  };
  return (
    <div>
      <label>{prop.radioName}</label>
      {prop.values.map((value: string) => (
        <div key={value} className={prop.className.toString()}>
          <input type="radio" id={value} value={value} onChange={onChange} checked={prop.selectedName === value} />
          <label>{value}</label>
        </div>
      ))
      }
    </div>
  )
};
export default Radio;
