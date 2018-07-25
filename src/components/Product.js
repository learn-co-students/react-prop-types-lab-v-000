import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <p>Company: {this.props.name}</p>
        <p>Producer: {this.props.producer}</p>
        <p>Watermaked: {this.props.hasWatermark ? 'Yes' : 'No'}</p>
        <p>Color(s): {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

// function paperWeight(props, propName, componentName) {
//   const weight = props[propName]
//
//   if (weight === undefined) {
//     return new Error(propName + ' in ' + componentName + " is required.");
//   }
// //   const validWeight = props[propName] > 80 && props[propName] < 300
// //   if (!validWeight) {
// //       return new Error(propName + ' in ' + componentName + " must be a number between 80 and 300.");
// //   }
// //
// //   if (typeof props[propName] === 'number') {
// //       return new Error(propName + ' in ' + componentName + " must be a number");
// //   }
// }


Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    const weight = props[propName]

    if (weight === undefined) {
      return new Error(propName + ' in ' + componentName + " is required.");
    }

    if (isNaN(weight)) {
        return new Error(propName + ' in ' + componentName + " must be a number");
    }
    const validWeight = weight > 79 && weight < 301
    if (!validWeight) {
        return new Error(propName + ' in ' + componentName + " must be a number between 80 and 300.");
    }
  }
}

export default Product;
