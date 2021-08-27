import React from 'react';

const SearchBox = (props) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search humanoids'
        onChange={props.searchChange}
      />
      {
        !props.cardsCount 
          ? <p>Please wait while we get response from <a href="https://robohash.org/">ROBOHASH</a> to generate HUMANOID</p>
          : null
      }
    </div>
  );
}

export default SearchBox;