import React, { Component } from 'react';

export default class RegisterForm extends Component {

    state = {
        userName:'',
        password:'',
        error:false
    }

    changeInputHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.validateFields();
        const {error, userName, password} = this.state;
        if(!error){
            this.props.sendVlues({userName, password});
        }
    }

    validateFields = () => {
        const {password, userName} = this.state;
        if(userName === '' || password === ''){
            this.setState({error: true});
        }
        else{
            this.setState({error: false});
        }
    }

    render() {
        const {password, userName, error} = this.state;
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>
                        User Name:
                </label>
                    <input onChange={this.changeInputHandler} value={userName} name='userName' type='text'/>
                </div>
                <div>
                    <label>
                        Password:
                </label>
                    <input value={password} name='password' onChange={this.changeInputHandler} type='password' />
                </div>
                {error && <label>Please fill all the fields before submit.</label>}
                <button type='submit'>SUBMIT</button>
            </form>
        );
    }
}