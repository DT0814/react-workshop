import React, {ChangeEvent, Component} from 'react';

type SelectProps = {
  className: String;
  selectName: string;
  selected: string;
  values: Array<string>;
  changed: (name: String) => void
};
const Select = (prop: SelectProps) => {
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    prop.changed(e.currentTarget.value);
  };
  return (
    <div className={prop.className.toString()}>
      <label>{prop.selectName}</label>
      <select id={prop.selectName} name={prop.selectName} onChange={onChange} defaultValue={prop.selected}>
        {prop.values.map(
          value => <option key={value} value={value} selected={prop.selected === value}>{value}</option>
        )}
      </select>
    </div>
  )
};
export default Select
