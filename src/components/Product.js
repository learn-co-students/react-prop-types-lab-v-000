import React from 'react'
import PropTypes from 'prop-types'

//const weightPropType = (props, propName) => {
//  const val = props[propName];
//  if (val < 80 || val > 300) {
//    return new TypeError('Weight must be a number between 80 and 300.')
//  }
//}

function weightPropType(props, propName) {
  const val = props[propName]
  if (!val) {
    return new Error('Weight is required.')
  } if (isNaN(val)) {
    return new Error('Weight must be a number.')
  } if (val < 80 || val > 300) {
    return new Error('Weight must be between 80 and 300.')
  }
}

export default class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h3>Name: {this.props.name}</h3>
        <p>Producer: {this.props.producer} </p>
        <p>Has Watermark?: {this.props.hasWatermark} </p>
        <p>Color: {this.props.color} </p>
        <p>Weight: {this.props.weight} </p>
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
  weight: weightPropType
}
