import React, { Component } from 'react';
import 'assets/css/outlined_select.css';

class OutlinedSelect extends Component<any> {
  // constructor(props: any) {
  //   super(props);

  //   this.state = {
  //     label: 'Label',
  //     placeholder: '',
  //     type: 'text'
  //   };
  // }

  render() {
    return (
      <div className="material-textfield">
        <select placeholder={this.props.placeholder} className="appearance-none w-48"
        onChange={this.props.onChange} defaultValue={this.props.selected}>
          {this.props.options.map((option:any, index: number) => (
            <option key={index} value={option}>
              {option}
            </option>

          ))}
        </select>
        <label>{this.props.label}</label>
        <i className="suffixIcon">{this.props.suffixIcon}</i>
      </div>
    )
  }

}

export default OutlinedSelect
