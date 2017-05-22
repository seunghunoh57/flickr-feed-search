import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
// import ImageResults from './ImageResults';

class App extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   filterIMG: filterIMG()
    // };
  }

  // handleSearchChange(e){
  //   this.setState({ filterIMG: filterIMG(e.target.value) });
  // }

  render(){
    return(
      <div>
        <Header/>
        <SearchBar textChange={this.handleSearchChange} />
      </div>
    );
  }
}
export default App;
