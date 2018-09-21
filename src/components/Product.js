// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

export default class Product extends React.Component {
  render() {
    return(
      <div>
      <h1>{this.props.name}</h1>
      <h1>{this.props.producer}</h1>
      <h1>{this.props.hasWatermark}</h1>
      <h1>{this.props.color}</h1>
      <h1>{this.props.weight}</h1>
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
  weight: weightRange

}

function weightRange(props,propName) {
  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'number') {
      if (value > 300 || value < 80) {
        return new Error("Weight Not in Range")
      }
    } else {
      return new Error("weight must be a number")
    }
  } else {
    return new Error("Must input weight")
  }
}
