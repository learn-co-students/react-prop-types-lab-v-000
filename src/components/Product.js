// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
    render() {
        return (
            <div className="product">
                <ul>
                  <li>{this.props.name}</li>
                  <li>{this.props.producer}</li>
                  <li>{this.props.hasWatermark}</li>
                  <li>{this.color}</li>
                  <li>Weight: {this.props.weight}</li>
                </ul>
             </div>
    
        );
    }
}

Product.defaultProps = {
  hasWatermark: false,
  
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  
  weight: function(props, propName) {
    const weight = props[propName]      
    
    if (weight === undefined) {
        return new Error('Weight is required')
    }
    
    if (isNaN(weight)) {
        return new Error('Weight must be a number')
    }
    
    if(weight < 80 || weight > 300) {
        return new Error('Invalid');
   }
  },
//   weight: PropTypes.number.isRequired
  
};

export default Product;
// completed: function(props, propName, componentName) {
//   if(props[propName] < MIN || props[propName] > MAX) {
//       return new Error('Invalid');
//   }
// }


