import React, { Component } from 'react';

class Landing extends Component {
	// If isAuthenticated is true redirect to dashboard
	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	};

	render() {
		return (
			<div className="landing">
				<div className="dark-overlay landing-inner text-light">
					<div className="container">
						<div className="row">
							<div className="col-md-12 text-center">
								<h1 className="display-3 mb-4">
									EZ Meals
								</h1>
								<p className="lead">
									{" "}
									Create a customized meal plan based on your daily nutrio
								</p>
								<hr />
								<Link
									to="/register"
									className="btn btn-lg btn-info mr-2"
								>
									Sign Up
								</Link>
								<Link
									to="/login"
									className="btn btn-lg btn-light"
								>
									Login
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Landing.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Landing);