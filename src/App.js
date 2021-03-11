import React, {Component} from 'react';

import {UserList} from './components/UserList';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: [],
        };
    }

    componentDidMount() {
        fetch('https://taskplannerdavid.azurewebsites.net/user')
            .then(response => response.json())
            .then(data => {
                let userList = [];
                data.forEach(function (user) {
                    userList.push(user)
                });
                this.setState({userList: userList});
            });
    }

    render() {
        return (
            <div>
                <UserList usersList={this.state.userList}/>
            </div>
        );
    }
}

export default App;