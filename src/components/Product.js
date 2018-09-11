// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

export default class Product extends React.Component {
  render() {
    return (
      <div id='Product'>
        <h4>Name: {this.props.name}</h4>
        <h4>Producer: {this.props.producer}</h4>
        <h4>Watermark? {this.props.hasWatermark}</h4>
        <h4>Color: {this.props.color}</h4>
        <h4>Weight: {this.props.weight}</h4>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

var weight_range = []
for (var i = 80; i <= 300; i++) {
  weight_range.push(i)
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(weight_range).isRequired
}
