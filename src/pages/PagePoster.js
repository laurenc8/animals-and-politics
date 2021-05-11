import React from 'react';
import poster from '../assets/poster.png';

function PagePoster() {
  return (
    <div style={{paddingTop: '60px', paddingBottom: '30px'}}>
      <img src={poster} alt={'Poster'} width="50%"/>
    </div>
  );
};

export default PagePoster;