import React from 'react';
import Card from './Card';

const CardList = ({ humanoids, input }) => {
  if(!humanoids.length){
    let human = {
      'id': input.length,
      'name': input,
      "email": `${input}@humanoid.human`
    }
    humanoids.push(human)
  }
  console.log(humanoids)
  return (
    <div>
      {
        humanoids.map((user, i) => {
          return (
            <Card
              key={i}
              id={humanoids[i].id}
              name={humanoids[i].name}
              email={humanoids[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;