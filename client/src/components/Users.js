import React from 'react';
import axios from 'axios';

class Users extends React.Component{
    state = {
        users: []
    }

    componentDidMount(){
        axios
        .get(`http://localhost:5175/api/users`)
        .then( res => {
            console.log('response: ', res)
            this.setState({ 
                users: res.data
            })
        })
        .catch( err => {
            console.log(err)
        })
    }

    render(){
        console.log('CDM')
        return (
            <>
            <div>{this.state.users.map( user => {
                return (
                <p>{user.username}</p>
                )

            } )}</div>
            </>
        )
    }
}

export default Users;