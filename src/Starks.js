import React from "react";
import { List } from "./ListComponents";
import { characters } from "./characters";

export class Starks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : -1
    }
  }

  handleClick(index) {
    this.setState({ selected: index });
  }

  render() {
    return (
      <div>
        <aside id="menu">
          <List
            items={characters}
            fields={["surname", "name"]}
            onClick={this.handleClick.bind(this)}
          />
        </aside>
        <section id="main-content">
          {this.state.selected > -1 && (
            <p>{characters[this.state.selected].resume}</p>
          )}
        </section>
      </div>
    );
  }
}