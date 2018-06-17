import React from 'react'
import PropTypes from 'prop-types'


export default class Product extends React.Component {
  render() {
    return (
      <div className='products'>
      <li>{this.props.name}</li>
      <li>{this.props.producer}</li>
      <li>{this.props.hasWatermark}</li>
      <li>{this.props.weight}</li>
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
  weight: function(props, propName, Product) {
    if (props[propName] < 80 || props[propName] > 300) {
      return new Error('Number can not be less than 80 or more than 300')
    }
    if (props[propName] === undefined) {
      return new Error('You must provide a value for weight')
    }
    if (typeof props[propName] !== 'number') {
      return new Error('Value must be a number')
    }
  }
}

