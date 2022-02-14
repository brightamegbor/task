import { ChangeEventHandler, Component } from 'react';
import 'assets/css/outlined_input.css';
import PropTypes from 'prop-types';

interface OutlinedInputProps {
  placeholder: string;
  type: string;
  size: any;
  label: string;
  suffixIcon: any;
  onChange: ChangeEventHandler;
  onClick: any;
  value: string;
}

class OutlinedInput extends Component<OutlinedInputProps> {
  static propTypes: {
    placeholder: PropTypes.Requireable<string>;
    type: PropTypes.Requireable<string>;
    size: PropTypes.Requireable<any>;
    label: PropTypes.Requireable<string>;
    suffixIcon: PropTypes.Requireable<any>;
    onChange: PropTypes.Requireable<ChangeEventHandler>;
    onClick: PropTypes.Requireable<any>;
    value: PropTypes.Requireable<string>;
  };

  onKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      this.props.onClick();
    }
  };

  render() {
    return (
      <div className="material-textfield w-full">
        <input
          placeholder={this.props.placeholder}
          className="w-full"
          onChange={this.props.onChange}
          type={this.props.type}
          size={this.props.size}
          onKeyDown={this.onKeyDown}
          value={this.props.value}
        />
        <label>{this.props.label}</label>
        <i className="suffixIcon" onClick={this.props.onClick}>
          {this.props.suffixIcon}
        </i>
      </div>
    );
  }
}

OutlinedInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.any,
  label: PropTypes.string,
  suffixIcon: PropTypes.any,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.string
};

export default OutlinedInput;
