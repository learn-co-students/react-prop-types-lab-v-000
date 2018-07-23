// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types';

class Product extends React.Component {
  render(){
    return (
      <div>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
  }

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired
}

export default Product
