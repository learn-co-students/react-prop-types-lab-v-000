import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{ this.props.name }</h1>
        <p>Producer: { this.props.producer }</p>
        <p>Watermark? { this.props.hasWatermark }</p>
        <p>Color: { this.props.color }</p>
        <p>Weight: { this.props.weight }</p>       
      </div>    
    );
  }
}

Product.defaultProps = {
    hasWatermark: false
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
    weight: inRange
}

function inRange(props, propName, componentName) {
    let weight = props[propName];

    if (!weight) {
        return new Error (
            'Must provide a weight. Validation failed.'
        );
    }

    if (typeof(weight) != 'number') {
        return new Error (
            'Weight must be a number. Validation failed.'
        );
    }

    if (weight < 80 || weight > 300) {
        return new Error (
            'Weight must be from 80 to 300. Validation failed.'
        );
    }
}
