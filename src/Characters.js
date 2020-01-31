import React from "react";
import { List } from "./ListComponents";

export class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data_loaded: false,
      selected: -1,
      items: [],
      fields: ["surname", "name"]
    };
  }

  handleClick(index) {
    this.setState({ selected: index });
  }

  componentDidMount() {
    fetch("https://imr3-react-backend.herokuapp.com")
      .then(res => res.json())
      .then(json => {
        this.setState({
          data_loaded: true,
          items: json
        });
      });
  }

  render() {
    const { data_loaded, items, fields } = this.state;
    if (data_loaded) {
      return (
        <div>
          <aside id="menu">
            <List
              items={items}
              fields={fields}
              onClick={this.handleClick.bind(this)}
            />
          </aside>
          <section id="main-content">
            {this.state.selected > -1 && (
              <p>{items[this.state.selected].resume}</p>
            )}
          </section>
        </div>
      );
    } else {
      return (
        <div>
          <p>Loading data</p>
        </div>
      );
    }
  }
}
