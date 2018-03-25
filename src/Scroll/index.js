import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import sound from './images/Star-Wars-Theme.mp3'
import './styles.css';

class Scroll extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      notUser: false
    }
  }

  handleChange = (e) => {
    const name = e.target.value;
    this.setState({name});
  }

  enterName = () => {
    this.props.userLogin(this.state.name);
    this.setState({
      name: '',
      notUser: false
    });
  }

  lastUser = () => {
    this.props.userLogin(this.props.lastUser)
  }

  changeUser = () => {
    this.setState({notUser: true})
  }

  render() {
    const { scrollData, lastUser } = this.props;
    const scroll = (
        <article className='scroll-container'>
          <h4 className='scroll-title'>{scrollData.title}</h4>
          <p className='scroll-body'>{scrollData.opening_crawl}</p>
          <time className='scroll-date'>{scrollData.release_date}</time>
        </article>
      )

    return (
      <aside className='scroll'>
        <div className='logo-container'></div>
        {scroll}
        <form>
          {
            !this.state.notUser && lastUser.length > 0 ?
              <div className='enter-site'>
                <h3>Welcome back {lastUser}</h3>
                <Link to='/main' onClick={this.lastUser} className='link'>
                  <button>
                    Enter SWapiBox
                  </button>
                </Link>
                <h6>Not {lastUser}?</h6>
                <button onClick={this.changeUser}>Sign In</button> 
              </div>
            : 
              <div className='enter-site'>
                <h3>Welcome to SWapiBox</h3>
                <input 
                  type='text'
                  name={this.state.name}
                  placeholder='Enter Name'
                  onChange={this.handleChange}/>
                <Link to='/main' onClick={this.enterName} className='link'>
                  <button>
                   Enter SWapiBox
                  </button>
                </Link>
              </div>
          }
        </form>
        <audio autoPlay={true}>
          <source src={sound} type='audio/mpeg'/>
        </audio>
      </aside>
    )
  }
}

Scroll.propTypes = {
  scrollData: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default Scroll;