import React, { Component } from 'react';
import 'assets/css/outlined_input.css';

class OutlinedInput extends Component<any> {
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
      <div className="material-textfield w-full">
        <input placeholder={this.props.placeholder} className="w-full" type={this.props.type} size={this.props.size} />
        <label>{this.props.label}</label>
        <i className="suffixIcon">{this.props.suffixIcon}</i>
      </div>
    )
  }

}

export default OutlinedInput
