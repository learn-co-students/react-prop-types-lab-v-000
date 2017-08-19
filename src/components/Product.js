import React from 'react';
import PropTypes from 'prop-types';

// In the components/Product.js file, create a Product React component.
// This component has the following props:
//     name: a string — required
//     producer: a string — optional
//     hasWatermark: a boolean — optional, defaults to false
//     color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
//     weight: a number — required, ranges between 80 and 300
// Note: for the weight prop, we'll need custom logic. Remember that it's possible to write your own prop validator function!

// <Product
//   name="Dunder Mifflin"
//   producer="PaperCo"
//   color="white"
//   weight={210}
// />,

export default class Product extends React.Component {
  render() {
    return React.createElement('div', {},
      React.createElement('h3', {}, this.props.name),
      React.createElement('h4', {}, 'by ' + this.props.producer),
      React.createElement('p',  {}, 'Watermark?: ' + (this.props.hasWatermark ? 'yes' : 'no')),
      React.createElement('p',  {}, 'Color:    ' + this.props.color),
      React.createElement('p',  {}, 'Weight:   ' + this.props.weight)
    );
  }
};

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name:         PropTypes.string.isRequired,
  producer:     PropTypes.string,
  hasWatermark: PropTypes.bool,
  color:        PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight:       checkWeight
};

function checkWeight(props, propName, componentName) {
  const weight = props[propName];
  if (weight < 80 || weight > 300) {
    return new Error(propName + ' is out of range range.')
  }
  if (weight === undefined) {
      return new Error(propName + ' is required.');
  }
  if (isNaN(weight)) {
      return new Error(propName + ' must be a number.')
  }
}
