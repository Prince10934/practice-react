import React from "react";

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      totalPassenger: 0,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange = (event) => {
      this.setState({
          ...this.state,
          [event.target.name]:event.target.type==='checkbox'?event.target.checked:event.target.value
      })
  };
  render() {
    return (
      <>
      <div>
      <form>
          <label>
            Going Or Not :
            <input
              type="checkbox"
              name="isGoing"
              checked={this.state.isGoing}
              onChange={this.handleOnChange}
            />
          </label>
          <label>
            Total Passenger :
            <input
              type="number"
              name="totalPassenger"
              value={this.state.totalPassenger}
              onChange={this.handleOnChange}
            />
          </label>
        </form>
        <div>
            <h1>Is Going :- {this.state.isGoing?'Yes':'No'}</h1>
            <h2>Total Passenger :- {this.state.totalPassenger}</h2>
        </div>
      </div>
      </>
    );
  }
}

export default Reservation;
