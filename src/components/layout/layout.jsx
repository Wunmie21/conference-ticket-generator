// import React from 'react';
import PropTypes from 'prop-types';
import './layout.css'

const Layout = ({ children, style }) => {
  return (
    <div className='layout bg-primary-bg h-screen w-screen' style={style}>
      {children}
      {/* <Footer />  */}
    </div>
  );
};

// Define prop types
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

// Default props (optional)
Layout.defaultProps = {
  style: {},
};

export default Layout;
