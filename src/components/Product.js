import React from 'react';
import PropTypes from 'prop-types'; 

class Product extends React.Component {
 
  render() {
    return (
        <div> 
            <h2>{this.props.name}</h2>  
            <h2>{this.props.producer}</h2>  
            <h2>{this.props.hasWatermark}</h2>  
            <h2>{this.props.color}</h2>  
            <h2>{this.props.weight}</h2> 
        </div> 
    )
  } 
}; 

Product.defaultProps = {
  hasWatermark: false
}; 



Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    if (props[propName] == undefined) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    } 
    // console.log(props) 
    // console.log(typeof(props[propName])!== 'number')
     if (isNaN(props[propName])) {
      return new Error(
        'Weight is not a number.'
      );
    }
    
    if (props[propName] <= 80 || props[propName] >= 300) { 
        return new Error( 
            `Weight is out of range.`
        );
    }  
  }
};
            
export default Product;