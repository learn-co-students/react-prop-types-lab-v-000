// Code Product Component Here
import React from "react"
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render () {
    return (
      <div>
      { this.props.name }
      { this.props.producer }
      { this.props.hasWatermark }
      { this.props.color }
      { this.props.weight }
      </div>
    )
  }
}

Product.defaultProps = {hasWatermark: false}
Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(["white", "eggshell-white", "salmon"]).isRequired,
  weight: function(props, propName, componentName) {
    const weight = props[propName];
    if (typeof weight !== 'number' || weight > 300 || weight < 80) {
      console.error('Invalid ' + propName + 'supplied to ' + componentName + '. Validation failed.');
    }
  }
}
