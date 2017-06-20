import React from "react";

// Import sub-components
import Query from "./Query";
import Results from "./Results";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-12">
          <div className="row">
            <div className="col-sm-12">
              <Query setTerm={this.props.setTerm} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Results results={this.props.results} setArticleToSave={this.props.setArticleToSave} resultToSave={this.props.resultToSave} />
            </div>
          </div>
      </div>
    );
  }
}
export default Search;
