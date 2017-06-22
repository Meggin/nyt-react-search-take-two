import React from "react";
class Saved extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="col-md-12">
          		<div className="row">
          			<div className="col-sm-12">
          				<div className="panel panel-primary">
          					<div className="panel-heading">
          						<h3 className="panel-title">Saved Articles</h3>
        					</div>
        					<div className="panel-body">
					      	{this.props.saved.map((article, i) => {
					        	return (
					        		<div key={i} onClick={() => this.props.deleteArticle(article._id, i)} className="row savedRow">
					        			<div className="col-sm-5 articleText">
					        				<a href={article.url}>{article.title}</a>
					        			</div>
					        			<div className="col-sm-5 dateText">
					        				Date Saved: {article.date}
					        			</div>
					        			<div className="col-sm-2 pull-right">
					        				<button className="btn btn-primary removeButton pull-right">
                  								Remove
                							</button>
					        			</div>
					        		</div>
					        	);
					      	})}
					    	</div>
          				</div>
          			</div>
          		</div>
          	</div>
		);
	}
}

// Export the component back for use in other files.
export default Saved;