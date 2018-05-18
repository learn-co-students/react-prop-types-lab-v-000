import React from 'react'
import PropTypes from 'prop-types'

export default class Product extends React.Component {
  render () {
    return (
      <div>
        <h2>{ this.props.name }</h2>
        <p>Producer: { this.props.producer }</p>
        <p>Watermark: { this.props.hasWatermark }</p>
        <p>Colors: { this.props.color }</p>
        <p>Weight: { this.props.weight }</p>
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
  weight: function(props, propName, componentName) {
    if (props[propName] == null) {
      // Prop is missing
      if (isRequired) {
        // Prop is required but wasn't specified. Throw an error.
        throw new Error();
      }
      // Prop is optional. Do nothing.
    } else {
      if (typeof props[propName] != 'number') {
        return new Error ('Invalid type of `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed.');
      } else if (props[propName] < 80 || props[propName] > 300) {
        return new Error ('Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed.');
      }
    }

  }
};
