import React from "react";
import PropTypes from "prop-types";

export class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    };
  }
  static defaultProps = {
    name: "has no name"
  };
  static propTypes = {
    surname: PropTypes.string.isRequired,
    name: PropTypes.string,
    onClick: PropTypes.func.isRequired
  };

  toggle = () => {
    this.props.onClick(this);
    this.setState({ on: !this.state.on });
  };

  render() {
    return (
      <div
        className={`${this.state.on ? "on" : "off"}`}
        onClick={this.toggle}
      >
        <h2>{this.props.surname}</h2>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}