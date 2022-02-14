import React, { ChangeEventHandler, Component } from 'react';
import 'assets/css/outlined_select.css';
import PropTypes from 'prop-types';

interface OutlinedSelectProps {
  placeholder: string;
  label: string;
  selected: string;
  options: any[];
  suffixIcon: any;
  onChange: ChangeEventHandler;
}

class OutlinedSelect extends Component<OutlinedSelectProps> {
  static propTypes: {
    placeholder: PropTypes.Requireable<string>;
    label: PropTypes.Requireable<string>;
    selected: PropTypes.Requireable<string>;
    options: PropTypes.Requireable<any[]>;
    suffixIcon: PropTypes.Requireable<any>;
    onChange: PropTypes.Requireable<ChangeEventHandler>;
  };
  render() {
    return (
      <div className="material-textfield">
        <select
          placeholder={this.props.placeholder}
          className="appearance-none w-full"
          onChange={this.props.onChange}
          value={this.props.selected}>
          {this.props.options.map((option: any, index: number) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label>{this.props.label}</label>
        <i className="suffixIcon">{this.props.suffixIcon}</i>
      </div>
    );
  }
}

OutlinedSelect.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  selected: PropTypes.string,
  suffixIcon: PropTypes.any,
  options: PropTypes.array,
  onChange: PropTypes.func
};

export default OutlinedSelect;
