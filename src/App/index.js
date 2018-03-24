import React, { Component } from 'react';
import Nav from '../Nav/index.js';
import Scroll from '../Scroll/index.js';
import Main from '../Main/index.js';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: '',
      scrollData: {},
      categories: {
        people: false, 
        vehicles: false,
        starships: false, 
        planets: false, 
        favorites: false
      },
      activeCategoryInfo: [],
      activeCategoryName: 'main',
      favorites: [],
      next: null,
      previous: null
    }
  }

  // <iframe width="560" height="315" src="https://www.youtube.com/embed/Aja1pCUZPso?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

  componentDidMount() {
    this.fetchScroll();
    if (localStorage.getItem('lastActiveUser')) {
      const lastActiveUser = localStorage.getItem('lastActiveUser');
      this.retrieveFavorites(lastActiveUser);
    }
  }

  fetchScroll = () => {
    const randomNumber = Math.floor(Math.random() * 7) + 1;
    const endpoint = `films/${randomNumber}`
    this.props.apiFetchCalls(endpoint)
      .then(scrollData=> this.setState({scrollData}))
      .catch(error => this.setState({errorStatus: error.message}))
  }

  userLogin = (name) => {
    const lastUser = localStorage.getItem('lastActiveUser');
    const userFavs = localStorage.getItem(name);
    if (lastUser === name || userFavs) {
      this.retrieveUser(name);
    } else {
      this.addUser(name);
    }
  }

  addUser = (name) => {
    localStorage.setItem('lastActiveUser', name);
    localStorage.setItem(name, JSON.stringify([]));
    let newFavorites = [];
    this.setState({
      favorites: newFavorites,
      currentUser: name
    });
  }

  retrieveUser = (name) => {
    localStorage.setItem('lastActiveUser', name);
    const userFavorites = JSON.parse(localStorage.getItem(name));
    this.setState({
      favorites: userFavorites,
      currentUser: name
    });
  }

  userLogOut= () => {
    this.setState({currentUser: ''});
  }

  retrieveFavorites = (name) => {
    const retrievedFavs = localStorage.getItem(name);
    const favorites = JSON.parse(retrievedFavs);
    this.setState({
      favorites,
      currentUser: name
    });
  }

  activateCategory = (category) => {
    const previousCategoryName = this.state.previousCategoryName;
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
      previousCategoryName
    })
  }

  updateCurrentCategory = (category, endPoint) => {
    if (category !== 'favorites') {
      this.props.apiFetchCalls(`${category}/${endPoint || ''}`)
        .then(apiReturn => {
          const next = this.cleanEndPoint(category, apiReturn.next);
          const previous = this.cleanEndPoint(category, apiReturn.previous);
          this.setState({next, previous});
          return apiReturn;
      })
        .then(categoryInfo => this.props.swapiCleaners[category](categoryInfo.results))
        .then(activeCategoryInfo => this.setState({ activeCategoryInfo }))
        .catch(error => console.log(error.message))
    } else {
      this.setState({activeCategoryInfo: this.state.favorites})
    }
  }

  cleanEndPoint = (category, endPoint) => {
    if (endPoint) {
      const cleaned = endPoint.split(`${category}/`);
      return cleaned[1];
    }
  }

  addToFavorites = (favoriteObject) => {
    const currentUser = this.state.currentUser
    let favorites = [...this.state.favorites];
    if (!favorites.find(item => item.name === favoriteObject.name)) {
      favorites.push(favoriteObject);
    } else {
      favorites = favorites.filter(item => item.name !== favoriteObject.name);
    }
    localStorage.setItem(currentUser, JSON.stringify(favorites));
    this.setState({favorites})
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => {
          return (
            <Scroll 
              scrollData={this.state.scrollData}
              userLogin={this.userLogin}
              lastUser={this.state.currentUser}/>)
            }}/>
        <Route path={`/${this.state.activeCategoryName}`} render={() => {
          return (
            <div className={`wrapper ${this.state.activeCategoryName}`}>
              <header className="App-header">
                <Link 
                  to='/' 
                  className='return-home' 
                  onClick={this.userLogOut}>
                    Logout
                </Link>
                <div className="App-title"></div>
              </header>
              <Nav 
                activateCategory={this.activateCategory}
                buttonType={Object.keys(this.state.categories)}
                numberOfFavorites={this.state.favorites ? this.state.favorites.length : 0}
                activeCategoryName={this.state.activeCategoryName}/>
              <Main 
                activeCategoryInfo={this.state.activeCategoryInfo}
                activeCategoryName={this.state.activeCategoryName}
                updateCurrentCategory={this.updateCurrentCategory}
                addToFavorites={this.addToFavorites}
                favorites={this.state.favorites}
                next={this.state.next}
                previous={this.state.previous}/>
            </div>
          )
        }}/>

      </div>
    );
  }
}

App.propTypes = {
  apiFetchCalls: PropTypes.func,
  swapiCleaners: PropTypes.object
}

export default App;
