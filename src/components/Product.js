import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.producer}
        {this.props.hasWatermark}
        {this.props.color}
        {this.props.weight}
      </div>
    )
  }
}

var weight_range = [];
for (var i = 80; i <= 300; i++) {                                        weight_range.push(i);
}

var colors = ['white', 'eggshell-white', 'salmon']

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(colors).isRequired,
  weight: PropTypes.oneOf(weight_range).isRequired
}

Product.defaultProps = {
  hasWatermark: false
}

export default Product;
