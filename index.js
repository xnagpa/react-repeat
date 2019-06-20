import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import MainPage from '~/components/pages/MainPage';
import ContactsPage from '~/components/pages/ContactsPage';
import ProductPage from '~/components/pages/ProductPage';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/item/:id">About</Link>
            </li>
            <li>
              <Link to="/contacts/">Contacts</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={MainPage} />
        <Route path="/item/:id" exact render={({match}) => (<ProductPage product_id={match.params.id}/>)} />
        <Route path="/contacts/" exact component={ContactsPage} />

      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


