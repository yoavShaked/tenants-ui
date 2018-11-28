import React from 'react';
import './style.css';
import NavItem from '../../containers/NavItem/NavItem';


class Navbar extends React.Component {

    render() {
        return (
            <div className="navbar">
                <div className="navbar-options">
                    <ul className="options">
                        <li className="option">
                            <NavItem 
                            authSuccess={() => this.props.history.push('/main')} 
                            title='Login' 
                            type='auth' />
                        </li>
                        <li className="option">
                            <NavItem 
                            authSuccess={() => this.props.history.push('/main')}  
                            title='Signup' 
                            type='users' />
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default Navbar;