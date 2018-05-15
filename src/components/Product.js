import React from 'react';
import PropTypes from 'prop-types';

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
    );
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

  weight: function(props, propName, componentName) {
    const weight = props[propName]
    if(weight === undefined || weight === isNaN ){
      return new Error('Weight must be defined. Validation failed.');
    }
    if(typeof weight !== 'number'){
      return new Error ('Weight must be a number. Validation failed.');
    }
    if (weight < 80 || weight > 800) {
      return new Error('Weight must be between 80 - 300. Validation failed.');
    }
  }

}
