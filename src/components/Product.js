import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return(
      <div>
      product
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName) {
    if (props[propName] === undefined) {
      return new Error(`Missing ${propName}`)
    }
    if (typeof props[propName] !== 'number') {
      return new Error(`${propName} is not a number`)
    }
    if (props[propName] < 80 || props[propName] > 300) {
      return new Error(`${propName} has to be between 80 and 300`)
    }
  }
};

// <h2>{this.props.name}</h2>
// <h3>{ths.props.producer}</h3>
// <p>{this.props.hasWatermark ? 'Yes' : 'No'}</p>
// <p>{this.props.color}</p>
// <p>{this.props.weight}</p>
