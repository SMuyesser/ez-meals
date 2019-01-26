import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
			errors: {}
		};
	}

	// If logged in go to dashboard
	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	};

	// Mapstatetoprops gets errors from state and put them in props
	// if errors are included when we recieve new props it gets set to component state
	/*componentDidUpdate(prevProps, prevState) {
		console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA--------");
		console.log(prevProps.errors);
		console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB---------");
		console.log(prevState);
		if (prevState.errors !== this.state.errors) {
			let errors = this.state.errors;
			this.setState({ errors });
		}
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCC----------");
		console.log(nextProps.errors);
		console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDD-----------");
		console.log(prevState.errors);
		if (nextProps.errors !== prevState.errors) {

			return { errors: nextProps.errors };
		} else {
			return null;
		}
	};*/

	componentWillReceiveProps(nextProps) {
		console.log(nextProps.errors);
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors})
		}
	};

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = e => {
		e.preventDefault();

		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};

		// Second parameter allows us to use this.props.history to redicrect from within the action
		this.props.registerUser(newUser, this.props.history);
	};

	render() {
		const { errors } = this.state;

		return (
			<div className="register">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Sign Up</h1>
							<p className="lead text-center">
								Create your DevConnector account
							</p>
							<form noValidate onSubmit={this.onSubmit}>
								<TextFieldGroup
									placeholder="Enter Name"
									name="name"
									value={this.state.name}
									onChange={this.onChange}
									error={errors.name}
								/>
								<TextFieldGroup
									placeholder="Email Address"
									name="email"
									type="email"
									value={this.state.email}
									onChange={this.onChange}
									error={errors.email}
								/>
								<TextFieldGroup
									placeholder="Password"
									name="password"
									type="password"
									value={this.state.password}
									onChange={this.onChange}
									error={errors.password}
								/>
								<TextFieldGroup
									placeholder="Confirm Password"
									name="password2"
									type="password"
									value={this.state.password2}
									onChange={this.onChange}
									error={errors.password2}
								/>
								<input
									type="submit"
									className="btn btn-info btn-block mt-4"
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));