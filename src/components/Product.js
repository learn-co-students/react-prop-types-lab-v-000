import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return(
      <div className='product'>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark ? 'Yes' : 'No'}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }
};

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell', 'salmon']).isRequired,
  weight: (props, propName, componentName) => {
    const value = props[propName];

    if (value === undefined) {
      return new Error('Weight property is required')
    }
    if (value < 80 || value > 300) {
      return new Error('Weight property must be between 80 & 300')
    }
    if (isNaN(value)) {
      return new Error('Weight property must be a number')
    }
  }
};
