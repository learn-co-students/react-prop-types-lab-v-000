// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <p> {this.props.name}</p>
        <p> {this.props.producer}</p>
        <p> {this.props.hasWatermark}</p>
        <p> {this.props.color}</p>
        <p> {this.props.weight}</p>
      </div>
    );
  }
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
    // tried solutions below; reverted to flatiron solution. Good to have here
    // anyway as precedent:
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
  }
//   weight: function(props, propName, componentName ) {
//     const weight = props[propName]
//     if ((weight < 81) || (weight > 299)) {
//       return new Error (
//         `Must be between 80 and 300`
//       );
//   }
// }
//   // weight: PropTypes.number.isRequired,
  // customProp1: function(props, weight, Product) {
  //   if ((weight < 81) || (weight > 299)) {
  //     return new Error (
  //       `Must be between 80 and 300`
  //     );
  //   }


};

Product.defaultProps = {
  hasWatermark: false
};

// name: a string — required
// producer: a string — optional
// hasWatermark: a boolean — optional, defaults to false
// color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
// weight: a number — required, ranges between 80 and 300

export default Product
