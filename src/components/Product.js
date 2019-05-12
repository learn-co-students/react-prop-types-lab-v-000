// Code Product Component Here
import PropTypes from 'prop-types';
import React from 'react';

export class Product extends React.Component {
  render () {
    return (
      <div className="product">
        {this.props.name}
        {this.props.producer}
        {this.props.hasWatermark}
        {this.props.color}
        {this.props.weight}
      </div>
    )
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell', 'salmon']).isRequired,
  weight: function(props, propName) {

    if (isNaN(props[propName])) {
      return new Error ('The `weight` prop is not a number.');
    }

    if (!(propName in props)) {
      return new Error (
        'validation a'
      );
    }

    if ((props[propName] > 300 || props[propName] < 80)) {
      return new Error (
        'validation failed 2'
      );
    }

  }
}

Product.defaultProps = {
  hasWatermark: false,
}

export default Product;


//  `name`: a string — required
//  `producer`: a string — optional
//  `hasWatermark`: a boolean — optional, defaults to false
//  `color`: a string — required, can only be `'white'`, `'eggshell-white'` or `'salmon'`
//  `weight`: a number — required, ranges between 80 and 300
