import React from "react";
import PropTypes from "prop-types";

const TiktokEmbed = ({ embedId }) => (
  <div style={{paddingTop: '30px'}}>
    <iframe
      height="480"
      src={`https://www.tiktok.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded tiktok"
    />
  </div>
);

TiktokEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default TiktokEmbed;