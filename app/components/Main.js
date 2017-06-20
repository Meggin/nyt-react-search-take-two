import React from "react";

// Import sub-components
import Search from "./children/Search";
import Saved from "./children/Saved";

// Helper Function
import helpers from "./utils/helpers";

class Main extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      searchTerm: "",
      results: [],
      resultToSave: {},
      saved: []
    };

    this.setTerm = this.setTerm.bind(this);
    this.setResultToSave = this.setResultToSave.bind(this);
  }

    // The moment the page renders get saved articles
  componentDidMount() {
    // Get the latest history.
    helpers.getSaved().then(function(response) {
      console.log(response);
      if (response !== this.state.saved) {
        console.log("Saved articles", response.data);
        this.setState({ saved: response.data });
      }
    }.bind(this));
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("Search term updated.");

      helpers.runQuery(this.state.searchTerm).then((data) => {
        if (data !== this.state.results) {
          console.log("Data looks like this: " + data[0].headline.main);

          this.setState({ results: data });
        }
      });
    }
  }

  setTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  setResultToSave(selectedResultItem) {
    this.setState({
      resultToSave: selectedResultItem
    });
    this.setState(previousState => ({
      saved: [...previousState.saved, 'resultToSave']
    }));
  }

  render() {

    return (
      <div className="container">
        <div className="jumbotron">
          <h1>New York Times Article Scrubber</h1>
          <p>Search for and annotate articles of interest!</p>
        </div>
        <div className="row">
          <Search setTerm={this.setTerm} setResultToSave={this.setResultToSave} saved={this.state.saved} results={this.state.results} resultToSave={this.state.resultToSave} />
        </div>
        <div className="row">
          <Saved saved={this.state.saved} />
        </div>
      </div>
    );
  }
}

// Export the componen back for use in other files
export default Main;