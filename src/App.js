import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const store = configureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' render={(props) => <Navbar {...props}/>} />
              <Route path='/main' render={(props) => <Main {...props}/>} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
