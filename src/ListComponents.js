import React from "react";
import PropTypes from "prop-types";

export class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: -1
        }
    }
    static propTypes = {
        items: PropTypes.array.isRequired,
        fields: PropTypes.arrayOf(String).isRequired,
        onClick: PropTypes.func.isRequired
    };

    handleClick(index) {
        this.setState({ selected: index });
        this.props.onClick(index);
    }

    render() {
        return (
            <ul>
                {this.props.items.map((item, index) => (
                    <ListItem line_1={item[this.props.fields[0]]} line_2={item[this.props.fields[1]]} key={index} onClick={this.handleClick.bind(this, index)} selected={this.state.selected === index ? true : false}
                    />
                ))}
            </ul>
        );
    }
}

export class ListItem extends React.Component {

    static defaultProps = {
        selected : false,
        line_2: "default value for Line 2"
    };
    static propTypes = {
        line_1: PropTypes.string.isRequired,
        line_2: PropTypes.string,
        onClick: PropTypes.func.isRequired,
        selected: PropTypes.bool
    };

    toggle = () => {
        this.props.onClick(this);
    };

    render() {
        return (
            <div className={`${this.props.selected ? "on" : "off"}`} onClick={this.toggle}>
                <h2>{this.props.line_1}</h2>
                <h3>{this.props.line_2}</h3>
            </div>
        );
    }
}