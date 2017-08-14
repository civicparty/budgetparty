import React, { Component } from 'react';

class Header extends Component {

  render() {
    const { activeChoice, activeChoiceId, level } = this.props;

    const imageStyle = {
      backgroundImage: activeChoice ? `url(/images/${activeChoice.image})` : '',
      backgroundSize: 'cover',
      paddingTop: '65px',
    }

    const showOverlay = activeChoiceId && !this.props.overlay

    return (
      showOverlay ?
        <div className="Choices__cover" style={imageStyle}>
          <div className="Choices__cover-overlay" />
        </div>
        :
        <div className="PartyLevelHeader">
          <img src={`/images/${level.image.split('.')[0]}_full.svg`}
            alt={level.title}
            className="PartyLevelHeader__image"
          />
        </div>
    );
  }

}

export default Header;
