import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'

class Home extends React.Component {
    render() {
        this.props.users.map(person => console.log(person))
        return (
            <div>
                <h1 id='whos'>Whos Watching?</h1>
                <div id="usersContainer">
                {this.props.users.map(user => {
                    return (
                           <div className="user"><Link id='lin' to='/Catalog'>{user.name}</Link></div> 
                           )
                })}
            </div>
            </div>
            
        );
    }
}


export default Home;
