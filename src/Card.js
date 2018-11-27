import React from 'react';

const Card = ({ title, body, id, removeIdea, isFavorite }) => {
  const classString = `Card ${isFavorite && 'favorite'}`;
  return(
    <div className={classString}>
      <h1>{title}</h1>
      <p>{body}</p>
      <button>favorite</button>
      <button className='btn-remove' onClick={() => removeIdea(id)}>X</button>
    </div>
  );
}

export default Card;
