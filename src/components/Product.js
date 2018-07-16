import React from 'react'
import PropTypes from 'prop-types'

export default class Product extends React.Component {
  render() {
  return (
    <div className="product">
    <p>{this.props.name}</p>
    <p>{this.props.producer}</p>
    <p>{this.props.hasWatermark}</p>
    <p>{this.props.color}</p>
    <p>{this.props.weight}</p>
    </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

var weightRange = [];
for (var i = 80; i <= 300; i++) {
  weightRange.push(i)
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(weightRange).isRequired
}
