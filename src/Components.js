import React from "react";
import PropTypes from "prop-types";

export class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.greeting}</h1>;
  }
}

export class Lorem extends React.Component {
  render() {
    return <p>{this.props.lorem}</p>;
  }
}

export class Article extends React.Component {
  render() {
    return <p>{this.props.content}</p>;
  }
}


