import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
const Layout = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('currentUser'))
  return (
    <div>
      <Header user={user.email} />
      { children }
    </div>
  );
};

Layout.propTypes = {
    children: PropTypes.element.isRequired
}

export default Layout;
