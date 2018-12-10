import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Product from './components/Product'

function weightRangeCheck(props, propName, componentName) {
    let weight = props[propName];
    
    if (weight === undefined) {
      return new Error("Sorry you must include a number for weight.");
    }

    if (isNaN(weight)) {
      return new Error("Sorry weight must be a number.");
    }

    return weight >= 80 && weight <= 300 ? null : new Error("Must be within range of 80 to 300");
  }

Product.defaultProps = {
	hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,		
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightRangeCheck
}  

ReactDOM.render(
  <Product
    name='Dunder Mifflin'
    producer='PaperCo'
    color='salmon'
    weight={210}
  />,
  document.getElementById('global')
)
