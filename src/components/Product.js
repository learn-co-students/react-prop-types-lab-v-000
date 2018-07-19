import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {
  render() {
    return(
      <div class="Product">
        <h1>{this.props.name}</h1>
        <h2>By {this.props.producer}</h2>
        <h3>Info:</h3>
        <ul>
          <li><strong>Color: </strong> {this.props.color}</li>
          <li><strong>Weight: </strong> {this.props.weight}</li>
        </ul>
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
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: (props) => {
    const productWeight = props.weight
    const validWeight = productWeight > 79 && productWeight < 301

    if (productWeight === undefined) {
      return new Error('The `weight` is required.')
    } else if (isNaN(productWeight)){
      return new Error('The `weight` is not a number.')
    } else if (!validWeight) {
      return new Error('The `weight` should range between 80 and 300.')
    }
  }
}

export default Product
