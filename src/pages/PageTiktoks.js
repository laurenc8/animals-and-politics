import React from 'react';
import TiktokEmbed from '../components/Tiktok';

function PageTiktoks() {
  return (
    <div style={{paddingTop: '60px', paddingBottom: '30px'}}>
      <TiktokEmbed embedId="6961242662888312069" />
      <TiktokEmbed embedId="6961245525605682438" />
      <TiktokEmbed embedId="6961248355561327877" />
      <TiktokEmbed embedId="6961404158712827142" />
      <TiktokEmbed embedId="6961404757139393798" />
      <TiktokEmbed embedId="6961405206831697158" />
    </div>
  );
};

export default PageTiktoks;