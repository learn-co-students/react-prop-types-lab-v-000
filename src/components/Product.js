import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Product extends React.Component{
  render(){
    return(
      <div>
        <h1>Name: {this.props.name}</h1>
        <p>Producer: {this.props.producer}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
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
	weight: (props, propName) => {
    const weight = props[propName];
    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }
    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }
    const isValidWeight = weight > 80 && weight < 300;
    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  }
};

//   weight: (props, propName) => {
//   const wt = props[propName]
   
//   if((wt > 80) &&  (wt < 300) && (typeof(wt) === 'number')){
//     return true
//     } else {
//     return false
//     }
//   }
// };

// function validWeight(props, propName, Product) {
//   Product = Product || 'ANONYMOUS';

//   if (props[propName]) {
//     let value = props[propName];
//     if (value > 80 && value < 300) {
//         return true
//     } else {
//       return false
//     }
//   }
// }

export default Product;
