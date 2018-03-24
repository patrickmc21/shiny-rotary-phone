import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
        <article>
          <h4>{scrollData.title}</h4>
          <p>{scrollData.opening_crawl}</p>
          <time>{scrollData.release_date}</time>
        </article>
      )

    return (
      <aside className='scroll'>
        {scroll}
        <h1>SWapiBox</h1>
        <form>
          {
            !this.state.notUser && lastUser.length > 0 ?
              <div>
                <h3>Welcome back {lastUser}</h3>
                <Link to='/main' onClick={this.lastUser}>
                  <button>
                    Proceed to SWapiBox
                  </button>
                </Link>
                <h6>Not {lastUser}?</h6>
                <button onClick={this.changeUser}>Sign In</button> 
              </div>
            : 
              <div>
                <input 
                  type='text'
                  name={this.state.name}
                  placeholder='Enter Name'
                  onChange={this.handleChange}/>
                <Link to='/main' onClick={this.enterName}>
                  <button>
                    Proceed to SWapiBox
                  </button>
                </Link>
              </div>
          }
        </form>
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