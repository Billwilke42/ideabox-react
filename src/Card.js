import React from 'react';

const Card = ({ title, body, id, removeIdea }) => {
  return(
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <button onClick={() => removeIdea(id)}>X</button>
    </div>
  );
}

export default Card;
