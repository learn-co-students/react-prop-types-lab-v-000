import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return(
 <div>     
      
        
 </div>
    )
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
  weight: weightInRange

}

function weightInRange(props, propName) {
  const weight = props[propName];
  const validWeight = weight > 80 && weight < 300;

  if (weight === undefined) {
    return new Error('Add a weight.');
  }
  if (isNaN(weight)) {
    return new Error('Weight needs to be a number')
  }
  if (!validWeight) {
    return new Error('Choose a weight between 80 and 300.')
  }
}




export default Product;

// name: a string — required
// producer: a string — optional
// hasWatermark: a boolean — optional, defaults to false
// color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
// weight: a number — required, ranges between 80 and 300
