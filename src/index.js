import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Store from './redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddArticle from './pages/AddArticle';
import Article from './pages/Article';
import Navbar from './components/Navbar';

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Navbar />

      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/addArticle' component={AddArticle} />
        <Route path='/article/:slug' component={Article} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
