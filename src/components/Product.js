import React from 'react';
import ReacDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return(
      <div className="product">
        <h1>{this.props.name}</h1>
        <h3>{this.props.producer}</h3>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
        <small>{this.props.hasWatermark ? 'Watermarked' : 'Unmarked'}</small>
      </div>
    );
  }
}

function setRange() {
  const range = [];
  for(let i = 8; i < 301; i++) {
    range.push(i);
  }
  return range;
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(setRange()).isRequired
}
