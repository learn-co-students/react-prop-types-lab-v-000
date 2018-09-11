import React, { Component } from 'react';
import PropTypes from 'prop-types';
import propTypesRange from 'prop-types-range';

export default class Product extends Component {
  render() {
    return <div />;
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
  weight: propTypesRange(80, 300).isRequired
};
