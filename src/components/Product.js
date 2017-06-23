import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h4>Produced by: {this.props.producer}</h4>
        <p>Has watermark: {this.props.hasWatermark}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
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
  weight: function weight(props, propName) {
    var weight = props[propName];

    if (weight === undefined) {
      return new Error('The weight prop is required.')
    }
    if (isNaN(weight)) {
      return new Error('The weight prop is not a number.')
    }
    if (!(weight > 80 && weight < 300)) {
      return new Error('The weight prop should range between 80 and 300.')
    }
  }
}
