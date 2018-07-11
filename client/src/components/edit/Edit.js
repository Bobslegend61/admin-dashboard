import React, { Component } from 'react'
import { connect } from "react-redux";
import {  } from "react-router-dom";
import PropTypes from "prop-types";

import { editUser, getAUser } from "../../actions/userAction";
import "./Edit.css";

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            username: "",
            password: ""
        }
    }

    getUser = async () => {
        await this.props.getAUser(this.props.match.params.id);
    }

    componentWillMount() {
        this.getUser().then(() => {
            let { user: { id, username, password } } = this.props.user;
            this.setState({
                id, username, password
            })
        })
    }

    inputChanged = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formSubmitted = (e) => {
        e.preventDefault();
        let { id, username, password }  = this.state;
        let data = { id, username, password };
        this.props.editUser(data);
        this.props.history.replace("/");
    }

    render() {
        return (
            <div className="Login">
                <p className="header">Edit {  }</p>
                <form onSubmit={ this.formSubmitted }>
                    <div className="form-group">
                        <input type="text" placeholder="Username" name="username" value={ this.state.username } onChange={ this.inputChanged }/>
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" name="password" value={ this.state.password } onChange={ this.inputChanged }/>
                    </div>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});

Edit.propTypes = {
    editUser: PropTypes.func.isRequired,
    getAUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { editUser, getAUser })(Edit);