import React from 'react';
import poster from '../assets/poster.png';

function PagePoster() {
  return (
    <div>
      <div style={{paddingTop: '60px', paddingBottom: '30px'}}>
        <img src={poster} alt={'Poster'} width="50%"/>
      </div>
      <p style={{textAlign: 'left', padding: '30px'}}>Since George's research paper found that lack of awareness about a reason to eat less meat was associated with being less persuasive to people, one way to make the issue of antibiotic resistance arising from factory farming more persuasive is to simply increase its visibility to people and inform them about it. This poster was made to explain the issue and give some key statistics to a general audience, and we imagine it could be posted in a physician's office or waiting room of a clinic.</p>
      <h2>Additional Resources</h2>
      <ul style={{textAlign: 'left'}}>
        <li><a href="https://www.cdc.gov/NARMSNow">CDC NARMS Now: Human Data</a></li>
        <li><a href="https://www.nrdc.org/experts/david-wallinga-md/most-human-antibiotics-still-going-us-meat-production">NRDC "New Data: Animal vs. Human Antibiotic Use Remains Lopsided"</a></li>
        <li><a href="https://www.sentienceinstitute.org/us-factory-farming-estimates">Sentience Institute US Factory Farming Estimates</a></li>
      </ul>
    </div>
  );
};

export default PagePoster;