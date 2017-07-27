import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.producer}</li>
        <li>{this.props.hasWatermark}</li>
        <li>{this.props.color}</li>
        <li>{this.props.weight}</li>
      </ul>
    );
  }
}

var list = [];
for (var i=80; i < 301; i++) {
    list.push(i);
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(list).isRequired,
};

Product.defaultProps = {
  hasWatermark: false,
};

export default Product;
