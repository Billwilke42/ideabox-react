import React from 'react';
import Card from './Card';

const IdeaContainer = ({ ideas, removeIdea }) => {
  const ideaCards = ideas.map(idea => (
    <Card {...idea} removeIdea={removeIdea} key={idea.id} />
  ));
  return(
    <div>
      {ideaCards}
    </div>
  );
}

export default IdeaContainer;
