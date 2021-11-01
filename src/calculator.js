import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num1: "", num2: "", result: "" };
  }
  add = () => {
    this.setState({ result: +this.state.num1 + +this.state.num2 });
    console.log(this.state.result);
    this.setState({ num1: "", num2: "" });
  };
  substract = () => {
    this.setState({ result: +this.state.num1 - +this.state.num2 });
    console.log(this.state.result);
    this.setState({ num1: "", num2: "" });
  };
  multiply = () => {
    this.setState({ result: +this.state.num1 * +this.state.num2 });
    console.log(this.state.result);
    this.setState({ num1: "", num2: "" });
  };
  divide = () => {
    this.setState({ result: +this.state.num1 / +this.state.num2 });
    console.log(this.state.result);
    this.setState({ num1: "", num2: "" });
  };
  render() {
    return (
      <>
        <input
          type="text"
          id="num1"
          value={this.state.num1}
          onChange={(e) => {
            console.log("event fired");
            this.setState({ num1: e.target.value });
          }}
        />
        <input
          type="text"
          id="num2"
          value={this.state.num2}
          onChange={(e) => {
            console.log("event fired");
            this.setState({ num2: e.target.value });
          }}
        />
        <input
          placeholder="result"
          type="text"
          id="result"
          value={this.state.result}
          readOnly
        />
        <div>
          <button className="add" onClick={this.add}>
            add
          </button>
          <button className="add" onClick={this.substract}>
            subtract
          </button>
          <button className="add" onClick={this.divide}>
            divide
          </button>
          <button className="add" onClick={this.multiply}>
            multiply
          </button>
        </div>
      </>
    );
  }
}

export default Calculator;
