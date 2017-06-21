import React from "react";
class Saved extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="col-md-12">
          		<div className="row">
          			<div className="panel panel-primary">
          				<div className="panel-heading">
          					<h3 className="panel-title">Saved Articles</h3>
        				</div>
        				<div className="panel-body">
					      {this.props.saved.map((article, i) => {
					        return (
					        	<div key={i} onClick={() => this.props.deleteArticle(article._id)} className="row">
					        		<div className="col-sm-4">
					        			{article.title}
					        		</div>
					        		<div className="col-sm-4">
					        			Date Saved: {article.date}
					        		</div>
					        		<div className="col-sm-4">
					        			<button className="btn btn-primary">
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
		);
	}
}

// Export the component back for use in other files.
export default Saved;