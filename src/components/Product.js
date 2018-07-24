// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

const weightPropType = (props, propName, componentName) => {
  const value = props[propName];

  if (value >= 80 && value <= 300 && typeof value === 'number') {
    return null;
  }

  return new TypeError(`Invalid Weight Prop Value: ${value} for ${propName} in ${componentName}`);
};

export default class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
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
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightPropType
}
