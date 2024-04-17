import React from 'react';
import './myworks.css'
const Livewebsites = () => {
  const liveWebsitesUrl = "https://ripandeepsidhu.github.io/quiz-game/";

  return (
    <a className='web1' href={liveWebsitesUrl} target="_blank" rel="noopener noreferrer">
      Click here to visit Website
    </a>
  );
};

export default Livewebsites;