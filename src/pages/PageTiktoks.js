import React from 'react';
import TiktokEmbed from '../components/Tiktok';

function PageTiktoks() {
  return (
    <div>
      <div style={{paddingTop: '60px', paddingBottom: '30px'}}>
        <TiktokEmbed embedId="6961242662888312069" />
        <TiktokEmbed embedId="6961245525605682438" />
        <TiktokEmbed embedId="6961248355561327877" />
        <TiktokEmbed embedId="6961404158712827142" />
        <TiktokEmbed embedId="6961404757139393798" />
        <TiktokEmbed embedId="6961405206831697158" />
      </div>
      <p style={{padding: '20px', textAlign: 'left'}}>We asked our friends questions about facts related to animals and experimentation, the environment, diseases, and more. Here are their thoughts!</p>
      <h2>Additional Resources</h2>
      <ul style={{textAlign: 'left'}}>
        <li>Environmental Impact: <a href="https://www.nature.com/articles/s41586-018-0594-0">"Options for keeping the food system within environmental limits"</a></li>
        <li>The Meat Subsidy: <a href="https://meatonomics.com/">Meatonomics</a></li>
        <li>Animal Experimentation: <a href="https://www.peta.org.uk/blog/6-horrific-experiments/">PETA "6 Horrific Experiments on Animals and What You Can Do to End Cruel Tests"</a></li>
      </ul>
    </div>
  );
};

export default PageTiktoks;