import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h1>Name: {this.name}</h1>
        <h3>Producer: {this.producer}</h3>
        <p>Watermark: {this.hasWatermark ? "Yes" : "No"}</p>
        <p>Color: {this.color}</p>
        <p>Weight: {this.weight}</p>
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
  weight: function(props, propName, componentName){
    if ( !props[propName] ){
      return new Error(`${propName} is missing`);
    }
    if ( typeof props[propName] !== 'number' ){
      return new Error(`propName must be a number`);
    }
    if ( props[propName]<80 || props[propName]>300 ){
      return new Error(`propName must range between 80 and 300`);
    }
  }
}

export default Product;
