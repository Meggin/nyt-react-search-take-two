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
					      {this.props.saved.map(function(saved, i) {
					        return (
					          <p key={i}>{saved.title}</p>
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