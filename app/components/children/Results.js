import React from "react";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    console.log("This is: " + this);
  }
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body">
          {this.props.results.map(function(obj, index){
            return (
              <div onClick={this.handleSubmit} key={index}>
                <p>{obj.headline.main}</p>
                <button type="submit" className="btn btn-primary">
                  Save Article
                </button>
              </div>
            );
          }, this)}
        </div>
      </div>
    );
  }
}
export default Results;