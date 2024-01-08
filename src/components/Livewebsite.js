import React from 'react';
import './myworks.css'
const Liveweb = () => {
  const liveWebsiteUrl = "https://ripandeepsidhu.github.io/Genesis/";

  return (
    <a className='web1' href={liveWebsiteUrl} target="_blank" rel="noopener noreferrer">
      Click here to visit Website
    </a>
  );
};

export default Liveweb;