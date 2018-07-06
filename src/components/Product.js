import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {


  render() {
    const { name, producer, color, weight } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{producer}</p>
        <p>{color}</p>
        <p>{weight}</p>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {
 name: PropTypes.string.isRequired,
 producer: PropTypes.string,
 hasWatermark: PropTypes.bool,
 color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
 weight: weightWithinRange
}

function weightWithinRange(props, propName) {
  const weight = props[propName];
  const validWeight = weight > 80 && weight < 300;

  if (weight === undefined) {
    return new Error('Please add a weight.');
  }
  if (isNaN(weight)) {
    return new Error('Weight needs to be a number.')
  }
  if (!validWeight) {
    return new Error('Please choose a weight between 80 and 300.')
  }
}
