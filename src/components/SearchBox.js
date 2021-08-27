import React from 'react';

const SearchBox = ({searchChange, cardsCount }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    {
      !cardsCount ? <p>Please wait till we get respose from <a href="https://robohash.org/">ROBOHASH</a> to load ROBOT</p> : null
    }
    </div>
  );
}

export default SearchBox;