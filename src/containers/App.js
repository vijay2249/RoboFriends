import React, { Component, setState, useEffect, useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

const App = () =>{
  const [humanoids, setHumanoids] = useState([])
  const [searchfield, setSearchField] = useState('')
  // const [objects, setObjects] = useState({
  //   humanoids : [],
  //   searchfield : ''
  // })

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setHumanoids(users))
      // .then(users => {
        // humanoids = objects.humanoids
        // setObjects({...objects, [humanoids]:users}))
      // }
  },[])

  const onSearchChange = (event) => setSearchField(event.target.value)
  // const onSearchChange = (event) => {
    // searchfiled = objects.searchfield
    // setObjects({...objects, [searchfiled]: event.target.value})
  // }

  const filteredHumanoids = humanoids.filter(humanoid =>{
    return humanoid.name.toLowerCase().includes(searchfield.toLocaleLowerCase());
  })
  // const filteredHumanoids = objects.humanoids.filter(humanoid =>{
    // return humanoid.name.toLocaleLowerCase().includes(objects.searchfield.toLocaleLowerCase())
  // })

  return(
    !humanoids.length
      ? <h1>Loading</h1>
      : (
        <div className='tc'>
        <h1 height='10px'>Humanoids</h1>
        <SearchBox height='20px' searchChange={onSearchChange}/>
        <Scroll>
          <CardList robots={filteredHumanoids} />
        </Scroll>
      </div>
      )
  )
}

export default App;