import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
};

Product.defaultProps = {
  hasWatermark: false
};

function createCustomPropType(isRequired) {
  // The factory returns a custom prop type
  return function(props, propName, componentName) {
    const prop = props[propName];
    if (prop == null) {
      // Prop is missing
      if (isRequired) {
        // Prop is required but wasn't specified. Throw an error.
        throw new Error();
      }
      // Prop is optional. Do nothing.
    } else {
      if (typeof prop !== 'number'){
          return new Error('Not a number')}
      else if (prop < 80 || prop > 300) {
        return new Error(
         'Invalid prop `' + propName + '` supplied to' +
         ' `' + componentName + '`. Validation failed.'
       );
     }
    }
  }
}

// Using the factory, create two different versions of your prop type
const withinRange = createCustomPropType(false);
withinRange.isRequired = createCustomPropType(true);


Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: withinRange.isRequired
};
