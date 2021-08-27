import React from 'react';
import Card from './Card';

const CardList = ({ robots, input }) => {
  if(!robots.length){
    let robot = {
      "id": input.length,
      "name": input,
      "email": `${input}@robot.robots.in`
    }
    robots.push(robot);
  }
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;