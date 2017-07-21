import React from 'react'
import PropTypes from 'prop-types'

export default class Product extends React.Component {
  render() {
    return (
      <div className='product'>
        <ul>
          <li>{ this.props.name }</li>
          <li>{ this.props.producer }</li>
          <li>{ this.props.hasWatermark ? 'Yes' : 'No'}</li>
          <li>{ this.props.color }</li>
          <li>{ this.props.weight }</li>
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
  color: PropTypes.oneOf(['white', 'eggshell', 'salmon']).isRequired,
  weight: (props, propName, componentName) => {
    const val = props[propName]

    if (val === undefined) {
      return new Error('weight prop is required')
    }

    if (val > 300 || val < 80) {
      return new Error('weight prop should be between 80 & 300')
    }

    if (isNaN(val)) {
      return new Error('weight prop must be a number')
    }
  }
}
