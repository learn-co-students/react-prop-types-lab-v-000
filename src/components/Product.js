// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
      <h2>{this.props.name}</h2>
      <h3>{this.props.producer}</h3>
        <ul>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
      </div>
    );
  }
}

let weightRange = createChainableTypeChecker(weightRangeChecker);

function weightRangeChecker(props, propName, componentName, location) {
  componentName = componentName || 'ANONYMOUS'

  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'number') {
        return value >= 80 && value <= 300 ? null : new Error(propName + ' in ' + componentName + " is outside of range 80 to 300");
    }
    else {
      return new Error(propName + ' in ' + componentName + " is not a number");
    }
  }

  // assume all ok
  return null;
}

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location) {
    componentName = componentName || ANONYMOUS;
    if (props[propName] == null) {
      var locationName = ReactPropTypeLocationNames[location];
      if (isRequired) {
        return new Error(
          ("Required " + locationName + " `" + propName + "` was not specified in ") +
          ("`" + componentName + "`.")
        );
      }
      return null;
    } else {
      return validate(props, propName, componentName, location);
    }
  }

  let chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightRange.isRequired
};

export default Product
