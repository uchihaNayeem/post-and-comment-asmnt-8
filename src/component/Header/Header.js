import React from 'react';




const Header = () => {

  const headerStyle ={
    backgroundColor: 'lightGray',
    textAlign: 'center',
    
    height: '200px',
  }
  return (
    <div style={headerStyle}>
      <h1 style={{padding: '50px'}} >Welcome to posts and Comments</h1>
    </div>
  );
};

export default Header;