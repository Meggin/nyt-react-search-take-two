import React from "react";

class Query extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("We are handling CLICK submit.");
    console.log("This is the search term: " + this.state.term);
    this.props.setTerm(this.state.term);
    this.setState({ term: "" });
  }
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Search</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="term"
                value={this.state.term}
                onChange={this.handleChange}
                required
              />
              <br />
              <button
                type="submit"
                className="btn btn-primary"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Query;
