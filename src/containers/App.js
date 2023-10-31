import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import { robots } from "../Robots";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from '../components/Scroll'

class App extends Component {
  //state must be defined.
  //constructor is usually used.
  constructor() {
    super(); //to call the Component Constructor.
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
    this.setState({ robots: robots });
  }

  render() {
    const {robots,searchfield} = this.state;
    const filteredrobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });
    if (robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Elites</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll >
              <Cardlist robots={filteredrobots}/>
          </Scroll>
         
        </div>
      );
    }
  }
}

export default App;
