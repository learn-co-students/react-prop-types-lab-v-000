// Code Product Component Here
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
    )
  }
}

// function createWeightValidator(isRequired) {
//   return function(props, weight, Product) {
//     const weight = props[weight]
//     if (prop == null) {
//       `Invalid prop: prop missing.`
//       if (isRequired) {
//         `Invalid prop: weight prop is required.`
//       }
//     } else {
//       if (!(props[weight] > 80 && props[weight] < 300)) {
//        return new Error(
//          'Invalid prop `' + weight + '` supplied to' + ' `' + Product + '`. Validation failed.'
//        )
//      }
//     }
//   }
// }

// const weightValidator = createWeightValidator(false);
// weightValidator.isRequired = createWeightValidator(true);

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];

    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }

    const isValidWeight = weight > 80 && weight < 300;

    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  },
  // weight: function(props, propName, componentName) {
  //   const weight = props[propName];
  //   if (typeOf weight !== 'number') {
  //     return new Error('Invalid type of `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed.');
  //   } else if (weight < 80 || weight > 300) {
  //     console.error('Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed.');
  //   }
  // },
}
