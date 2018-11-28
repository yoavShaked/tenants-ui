import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class FormTenant  extends Component {
    state = {
        name:'',
        phoneNumber:0,
        address:'',
        debt:false,
    }

    inputChangeHandler = (e) => {

    }

    render() {
        return (
            <form>
                <label>Name</label>
                <input/>
                <label>Phone Number</label>
                <input/>
                <label>Address</label>
                <input/>
                <label>Debt</label>
                <select onChange={}/>
            </form>
        );
    }
}

function mapStateToProps(state){
    return{
        
    };
}


