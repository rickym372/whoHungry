import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import Yelp from './util/Yelp.js';




class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term,location,searchBy){
    Yelp.searchYelp(term,location,searchBy).then((businesses) =>
    {
      console.log(businesses)
      this.setState({
        businesses: businesses
      })
    })
  }

  render(){
  return (
    <div className="App">
      <h1>Who's Hungry</h1>
      <SearchBar searchYelp={this.searchYelp} />
      <BusinessList businesses={this.state.businesses} />
    </div>
  )
  }
}

export default App;
