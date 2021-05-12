import React from 'react';
import YoutubeEmbed from '../components/ConnorVid.js';

function PageVideo() {
  return (
    <div>
      <div style={{paddingTop: '60px', paddingBottom: '30px'}}>
        <YoutubeEmbed embedId="dqzLiMgMqlw"/>
      </div>
      <h2>Additional Resources</h2>
      <ul style={{textAlign: 'left'}}>
        <li>For the impact of livestock on the environment: <a href="http://id.lib.harvard.edu/alma/990102105480203941/catalog">Livestock's long shadow: environmental issues and options</a></li>
        <li>For information about the health effects of saturated fats: <a href="https://medlineplus.gov/ency/patientinstructions/000838.htm">MedlinePlus Facts about saturated fats"</a></li>
        <li>For research done on the health benefits on a plant based diet: <a href="https://www.ahajournals.org/doi/10.1161/JAHA.119.012865">"Plant‐Based Diets Are Associated With a Lower Risk of Incident Cardiovascular Disease, Cardiovascular Disease Mortality, and All‐Cause Mortality in a General Population of Middle‐Aged Adults"</a></li>
        <li>For data on the meat consumption per capita of countries around the world: <a href="http://www.fao.org/faostat/en/#data/CL">FAOSTAT Food Supply - Livestock and Fish Primary Equivalent</a></li>
      </ul>
    </div>
  );
};

export default PageVideo;