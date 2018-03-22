import React, { Component } from 'react';
import Nav from '../Nav/index.js';
import Scroll from '../Scroll/index.js';
import Main from '../Main/index.js';
import PropTypes from 'prop-types';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollData: {},
      categories: {people: false, vehicles: false, planets: false},
      activeCategoryInfo: [],
      activeCategoryName: '',
      favorites: []
    }
  }

  componentDidMount() {
    this.fetchScroll();
  }

  fetchScroll = () => {
    const randomNumber = Math.floor(Math.random() * 7) + 1;
    const endpoint = `films/${randomNumber}`
    this.props.apiFetchCalls(endpoint)
      .then(scrollData=> this.setState({scrollData}))
      .catch(error => this.setState({errorStatus: error.message}))
  }

  activateCategory = (category) => {
    const currentCategories = {...this.state.categories};
    const newCategories = Object.keys(currentCategories).reduce((acc, type) => {
      type === category ? 
        acc[type] = true
        : acc[type] = false
      return acc;
    }, {})
    this.updateCurrentCategory(category)
    this.setState({
      categories: newCategories,
      activeCategoryName: category,
    })
  }

  updateCurrentCategory = (category) => {
    this.props.apiFetchCalls(`${category}/`)
      .then(categoryInfo => this.props.swapiCleaners[category](categoryInfo.results))
      .then(activeCategoryInfo => this.setState({ activeCategoryInfo }))
  }

  addToFavorites = (favoriteObject) => {
    let favorites = [...this.state.favorites];
    if (!favorites.find(item => item.name === favoriteObject.name)) {
      favorites.push(favoriteObject);
    } else {
      favorites = favorites.filter(item => item.name !== favoriteObject.name);
    }
    this.setState({favorites})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SWapiBox</h1>
        </header>
        <Scroll 
          scrollData={this.state.scrollData}/>
        <Nav 
          activateCategory={this.activateCategory}
          buttonType={Object.keys(this.state.categories)}
          numberOfFavorites={this.state.favorites.length}/>
        <Main 
          activeCategoryInfo={this.state.activeCategoryInfo}
          activeCategoryName={this.state.activeCategoryName}
          addToFavorites={this.addToFavorites}
          favorites={this.state.favorites}/>
      </div>
    );
  }
}

App.propTypes = {
  apiFetchCalls: PropTypes.func,
  swapiCleaners: PropTypes.object
}

export default App;
