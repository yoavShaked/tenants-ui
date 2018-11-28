import React, { Component } from 'react';
import Modal from '../../components/Modal/Modal';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import {auth} from '../../store/actions/auth';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class NavItem extends Component {

    state = { show: false };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    authanticate = (values) => {
        const {auth, authState, type, authSuccess} = this.props;
        auth(type, values);
        if(authState.success){
            this.setState({show: false});
            authSuccess();
        }
    }

    render() {
        const {title, authState} = this.props;
        const {show} = this.state;
        return (
            <div>
                <Modal show={show} handleClose={this.hideModal}>
                    <RegisterForm sendVlues={this.authanticate}/>
                    {!authState.success && <label>{authState.dataUser}</label>}
                </Modal>
                <a href={`#${title}`} onClick={this.showModal}>
                    {title}
                </a>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        auth,
    }, dispatch);
}

function mapStateToProps(state){
    console.log(state);
    return{
        authState:state.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavItem);