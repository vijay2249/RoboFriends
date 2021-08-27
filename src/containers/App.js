import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import {connect} from 'react-redux'
import {setSearchField} from '../actions'

const mapStateToProps = state =>{
  return{
    searchField: state.searchField
  }
}

const mapDispatchToProps = dispatch =>{
  // this name can be anything as this is a prop that is going to be rendered
  return {
    onSearchChange: (event) =>dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  render() {
    const { robots } = this.state;
    const {searchField, onSearchChange} = this.props
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    if(robots.length === 0) return <h1>Loading</h1>;
    else{
      return(
        <div className='tc'>
          <h1 height='10px'>RoboFriends</h1>
          <SearchBox height='20px' searchChange={onSearchChange} cardsCount={filteredRobots.length}/>
          <Scroll>
            <CardList robots={filteredRobots} input={searchField }/>
          </Scroll>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);