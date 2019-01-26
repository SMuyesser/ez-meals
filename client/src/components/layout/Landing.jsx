import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


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
								<h1 className="display-3" id="landing-h1">
									EZ Meals
								</h1>
							 	<div className="mb-4" id="edamam-badge" data-color="transparent"></div>
								<p className="lead">
									{" "}
									Create a customized meal plan based on your daily nutrition goals.
								</p>
								<hr />
								<Link
									to="/register"
									id="landing-register-btn"
									className="btn btn-lg btn-info mr-2"
								>
									Sign Up
								</Link>
								<Link
									to="/login"
									id="landing-login-btn"
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