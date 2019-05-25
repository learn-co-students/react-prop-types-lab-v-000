import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{ this.props.name }</h1>
        <p>{ this.props.producer }</p>
        <p>Watermark: { this.props.hasWatermark }</p>
        <p>Color: { this.props.color }</p>
        <p>Weight: { this.props.weight }</p>
      </div>
    );
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
  //Custom weight validator
  weight: function(props, propName) {
    const weight = props[propName];
    const isValidWeight = weight > 80 && weight < 300;

    //This makes it required.
    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }

    //This check to make sure it is a number.
    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }

    //This checks it is within the range indicated.
    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  }
}






export default Product;