import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const styles = {
  containerWrap: {
    boxShadow: '0 2px 13px -2px rgba(0, 0, 0, .2)',
    marginBottom: '75px',
    background: 'grey',
  },

  navbar: {
    backgroundColor: 'rgba(255, 255, 255, 0.753)',
    borderBottom: 'solid grey 1px',
    padding: '5px'
  },
};

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

const renderCreate = () => {
  if (Auth.loggedIn()) {
    return (
      <Link className="navbar-item" to="/Build">
        Create
      </Link>
    );
  }
}

  const renderControls = () => {
    // If logged in show logout controls
    if (Auth.loggedIn()) {
      return (
        <>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-primary" to="/me">
                  {Auth.getProfile().data.username}'s profile
                </Link>
                <Link className="button is-light" onClick={logout}>
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </>
      );
    }
    // If logged out show login controls
    return (
      <>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-primary" to="/signup">
                <strong>Sign up</strong>
              </Link>
              <Link className="button is-light" to="/login">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  };

  return (
    <>
      <div className="container-wrap" style={styles.containerWrap}>
        <nav className="navbar is-fixed-top " style={styles.navbar} role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <i className="fas fa-file-alt" width="112" height="28"></i>
            </Link>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu" style={styles.navbarMenu}>
            <div className="navbar-start">
              <Link className="navbar-item" to="/">
                Home
              </Link>

              <a className="navbar-item">
                Template
              </a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  More
                </a>

                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/me">
                    Profile
                  </Link>
                  {renderCreate()}
                  <hr className="navbar-divider"></hr>
                  <a className="navbar-item" href="https://github.com/morrisbianco/resume-builder/issues" target="_blank">
                    Report an issue
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {renderControls()}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
