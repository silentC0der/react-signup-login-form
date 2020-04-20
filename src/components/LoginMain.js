import React, { Component } from 'react';
import Login from './Login';
import UserList from './UserList'

class LoginMain extends Component {
    render() {
        const renderComponent = () => {
            const email= localStorage.getItem('email');
            if(email) {
                return <UserList />;
            } else {
                return <Login />;
            }
        }
        return (
            <div>
                { renderComponent() }
            </div>
        )
    }
}

export default LoginMain;