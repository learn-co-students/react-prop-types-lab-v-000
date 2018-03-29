import React from 'react';
import PropTypes from 'prop-types'

export default class Product extends React.Component {
  render() {
    return (
      <div className = "product">
        <li>{this.props.name}</li>
        <li>{this.props.producer}</li>
        <li>{this.props.hasWatermark}</li>
        <li>{this.props.color}</li>
        <li>{this.props.weight}</li>
      </div>
    );
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
  weight: (props, propName) => {
    if (props[propName] === undefined) {
      return new Error('weight is required')
    }
    if (isNaN(props[propName])) {
      return new Error('weight should be a number')
    }
    if (props[propName] < 80 || props[propName] > 300) {
      return new Error('Invalid prop `weight`')
    }
  }
};
