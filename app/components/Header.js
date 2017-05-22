import React from 'react';

const headerStyle = {
  'fontSize': '2em',
  'textAlign': 'center',
  'fontFamily': 'sans-serif'
};

class Header extends React.Component{
  render(){
    return(
      <h1 style={headerStyle} className="component-header">
        Test Search
      </h1>
    );
  }
}
export default Header;
