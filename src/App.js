import React from "react";
// import Button from "./components/Button";
import Name from "./components/Name";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   counter: 0,
    // };
    this.state = {
      name: "",
      message: "",
      namesList: ["Bedu"],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.namesList !== prevState.namesList) {
      this.setState({
        message: `The list's length is: ${this.state.namesList.length}`,
      });
    }
  }

  // substract = () => this.setState({ counter: this.state.counter - 1 });

  // sum = () => this.setState({ counter: this.state.counter + 1 });

  // render() {
  //   return (
  //     <div className="App">
  //       <Button text="Sumar" handleClick={this.sum} />
  //       {this.state.counter}
  //       <Button text="Restar" handleClick={this.substract} />
  //     </div>
  //   );
  // }

  checkForDuplicates = (text) => this.state.namesList.includes(text);

  handleClick = () => {
    const nameInState = this.state.name;

    if (!nameInState) return;

    const isDusplicate = this.checkForDuplicates(nameInState);

    if (isDusplicate) {
      this.setState({
        message: `${nameInState} is already on the list`,
      });
      return;
    }

    const updatedList = [...this.state.namesList, nameInState];

    this.setState({
      name: "",
      namesList: updatedList,
    });
  };

  handleInputChange = (event) => {
    this.setState({ name: event.target.value });
  };

  deleteNameFromList = (key) => {
    const listCopy = [...this.state.namesList];
    listCopy.splice(key, 1);

    this.setState({ namesList: listCopy });
  };

  render() {
    return (
      <div className="App">
        <p>{this.state.message}</p>
        <input value={this.state.name} onChange={this.handleInputChange} />
        <button onClick={this.handleClick}>Add</button>
        <ul>
          {this.state.namesList.map((name, key) => (
            <li key={key}>
              <Name
                name={name}
                deleteNameFromList={() => this.deleteNameFromList(key)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
