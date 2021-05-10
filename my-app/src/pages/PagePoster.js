import React from 'react';
import poster from './poster.png';

function PagePoster() {
  return (
    <div style={{paddingTop: '60px', paddingBottom: '30px'}}>
      <img src={poster} width="50%"/>
    </div>
  );
};

export default PagePoster;