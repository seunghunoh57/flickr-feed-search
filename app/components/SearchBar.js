import React, {Component} from 'react';
import axios from 'axios';

const base = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tags=";
const inputStyle={
  'width': '80vw',
  'height': '2em',
  'marginLeft': 'auto',
  'marginRight': 'auto',
  'fontSize': '1em',
  'display': 'block'
};
const imgStyle={
  'display': 'inline-block',
  'padding': '5px',
  'border': '1px solid black',
  'margin': '8px',
  'marginBottom': '20px'
};
const compDisplay={
  'marginTop': '100px'
};

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = { value: '', images: [] };
  }

  handleChange(e){
    this.setState({ value: e.target.value });
    this.fetchImages(e.target.value);
  }

  componentDidMount(){
    this.fetchImages(this.state.value);
  }

  fetchImages(searchText){
    var _this = this;
    this.serverRequest =
      axios.get(base + searchText).then(function(response) {
        _this.setState({
          images: response.data.items
        });
        console.log(searchText);
      }, (errorResponse) => {
        console.log(errorResponse)
      })
  }

  render(){
    return(
      <div>
        <div className="component-search-bar">
          <input style={inputStyle} onChange={this.handleChange.bind(this)} placeholder="Search for images on Flickr!"/>
        </div>
        <div style={compDisplay} className="component-display">
          {this.state.images.map(function(item, key){
              return (
                <div style={imgStyle} key={key}>
                <img src={item.media.m} />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
export default SearchBar
