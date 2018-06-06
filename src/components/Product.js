import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render () {
    return (
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.producer}</li>
        <li>{this.props.hasWatermark ? 'Yes' : 'No'}</li>
        <li>{this.props.color}</li>
        <li>{this.props.weight}</li>
      </ul>
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
  color: PropTypes
}