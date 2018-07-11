import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


import { getUsers, deleteUser } from "../../actions/userAction";
import "./Login.css";

class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    inputChanged = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formSubmitted = (e) => {
        e.preventDefault();
        let { username, password } = this.state;
        this.props.getUsers(username, password);
    }

    deleteAUser = (id) => {
        this.props.deleteUser(id);
    }


    render() {
        const { users, loggedIn } = this.props.user;
        return (
            <div className="Login">
                <p className="header">{ loggedIn ? "Users" : "Login" }</p>
                <form onSubmit={ this.formSubmitted } style={ { display: loggedIn ? "none" : "block" } }>
                    <div className="form-group">
                        <input type="text" placeholder="Username" name="username" value={ this.state.username } onChange={ this.inputChanged }/>
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" name="password" value={ this.state.password } onChange={ this.inputChanged }/>
                    </div>
                    <input type="submit" value="submit" />
                </form>
                <div className="users" style={ { display: users.length <= 0 ? "none" : "block" } }>
                    { users.map(({ id, username, password }) => {
                        return (
                            <div className="user-details" key={ id }>
                                <div>{ id }</div>
                                <div> { username } </div>
                                <div>{ password }</div>
                                <div><Link to={ `/edit/${ id }` }><i className="far fa-edit"></i></Link></div>
                                <div><i className="fas fa-trash" onClick={ () => this.deleteAUser(id) }></i></div>
                            </div>
                        )
                    }) }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

Login.propTypes = {
    getUsers: PropTypes.func.isRequired,
    deleteUser: PropTypes.func,
    user: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { getUsers, deleteUser })(Login);
