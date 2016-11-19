import React from 'react';
import styles from './index.scss';

export default class NavBar extends React.Component {
  render(){
      return(
        <nav className={"navbar navbar-dark bg-info "}>
          <a className="navbar-brand" href="#">Safe Spot</a>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Login</a>
            </li>
          </ul>
        </nav>
      );
  }
}
