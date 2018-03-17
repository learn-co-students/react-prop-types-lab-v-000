import React from 'react'
import PropTypes from 'prop-types'
import { range } from 'react-range-proptypes';

class Product extends React.Component {
  render(){
    return (
      <div>Product</div>
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
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  weight: range(80, 300).isRequired
}

export default Product



// *  `name`: a string — required
// *  `producer`: a string — optional
// *  `hasWatermark`: a boolean — optional, defaults to false
// *  `color`: a string — required, can only be `'white'`, `'eggshell-white'` or `'salmon'`
// *  `weight`: a number — required, ranges between 80 and 300