import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component{
  render() {
    return(
      <div>
        <h1>Name: {this.props.name}</h1>
        <p>Producer: {this.props.producer}</p>
        <p>Contains Watermark: {this.props.hasWatermark? "Yes" : "No"}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
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
  color: PropTypes.oneOf(['white' , 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName) {
    if (props[propName] == null) {
      return new Error("prop is required");
    }

    if (typeof(props[propName]) !== 'number'){
      return new Error("Not a number");
    }

    if (!(props[propName] > 80 && props[propName] < 300)) {
      return new Error("Out of range!");
    }
  }
}

export default Product;
