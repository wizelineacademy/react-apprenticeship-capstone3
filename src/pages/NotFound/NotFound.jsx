import React from 'react';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <div>
    <h1>PAGE NOT FOUND</h1>
    <Link to="/" style={{ color: 'white', fontSize: 16, }}>
        back to home :)
    </Link>
    </div>
  );
}

export default NotFoundPage;
