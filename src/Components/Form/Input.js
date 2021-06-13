import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    // console.log("submit :-> ", this.state.value);
    // alert(`submit :-> ${this.state.value}`)
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleOnChange}
            />
          </label>
          <input type="submit" value="submit" />
        </form>
      </>
    );
  }
}

export default Form;
