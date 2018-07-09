// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';


class Product extends React.Component {
    render() {
        return (
            <div className="product">
                <h2>{this.props.name}</h2>
                <p>{this.props.producer}</p>
                <p>{this.props.hasWatermark}</p>
                <p>{this.props.color}</p>
                <p>{this.props.weight}</p>
            </div>
        )
    }
}

Product.defaultProps = {
    hasWatermark: false
}

let weightRange = createChainableTypeChecker(weightRangeChecker);

Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
    weight: weightRange.isRequired
}

function weightRangeChecker(props, propName, componentName) {
    componentName = componentName || 'ANONYMOUS';
  
    if (props[propName]) {
        let value = props[propName];
        if (typeof value != 'number') {
            return new Error(propName + ' in ' + componentName + " is not a number")
        } else if (value < 80 || value > 300) {
            return new Error(propName + ' in ' + componentName + " is not between 80 and 300");
        }
    }
  
    // assume all ok
    return null;
  }

  function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location) {
      componentName = componentName || 'ANONYMOUS';
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

export default Product;