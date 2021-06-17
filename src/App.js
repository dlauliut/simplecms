//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";

import AddData  from './components/add-data.component';

class App extends Component {
  render() { 
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-black">
          <a href="/tutorials" className="navbar-brand">
            iiky21
          </a>
          <div className="navbar-nav mr-auto">
            {/* <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Switch>
            {<Route exact path={["/","/tutorials"]} component={AddData} />}
            <Route exact path="/add" component={AddData} />
            {/* <Route path="/tutorials/:id" component={Tutorial} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
