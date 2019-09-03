// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component { 
    render() {
        return (
          <div className="product">
            <h1>{this.props.name}</h1>
            <ul>  
                <li>Producer: {this.props.producer}</li>
                <li>Watermark? {this.props.hasWatermark}</li>
                <li>Color: {this.props.color}</li>
                <li>Weight: {this.props.weight}</li>
            </ul>
          </div>
        );
      }
 };

 Product.defaultProps = {
     hasWatermark: false
 }

 Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
    weight: weightRange
 };


 function weightRange(props, propName) {
    const value = props[propName];
    if (typeof value !== 'number' || value < 80 || value > 300) {
        console.error(propName + 'is invalid')
    }
}

export default Product
 