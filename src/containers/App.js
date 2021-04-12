import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox.js";
import "./App.css";
import Scroll from "../components/Scroll.js";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchfield.toLocaleLowerCase())
    );

    return !robots.length ? (
      <div className="loading">
        <h1>Loading</h1>
      </div>
    ) : (
      <div className="tc">
        <h1>Robo-friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
        <h1>D.Leonard</h1>
      </div>
    );
  }
}

export default App;
