import React from "react";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        title: "",
        date: ""
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(headline, pubdate) {
    event.preventDefault();
    console.log("This is headline of new article to save: " + headline);
    console.log("This is the published date of new article to save: " + pubdate);
    const newState = this.state.article;
    newState.title = headline;
    newState.date = pubdate;
    this.setState({
      article: newState
    });
    console.log("New value of article? " + this.state.article.title);
    this.props.setArticleToSave(this.state.article);
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
              <p key={index} onClick={() => this.handleSubmit(obj.headline.main, obj.pub_date)} >
                {obj.headline.main}
                <button className="btn btn-primary">
                  Save Article
                </button>
              </p>
            );
          }, this)}
        </div>
      </div>
    );
  }
}
export default Results;