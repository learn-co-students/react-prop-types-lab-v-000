import React from 'react';
import PropTypes from 'prop-types';

var weight_range = [];
for (var i = 80; i <= 300; i++) {
  weight_range.push(i);
}

export default class Product extends React.Component {
  render () {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <h4>{this.props.producer}</h4>
        <h4>{this.props.hasWatermark}</h4>
        <h4>{this.props.color}</h4>
        <h4>{this.props.weight}</h4>
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
  weight: PropTypes.oneOf(weight_range).isRequired
};
