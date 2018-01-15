// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';


class Products extends React.Component {
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

Products.defaultProps = {
  hasWatermark: false
}

Products.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    'white', 'eggshell-white', 'salmon'
  ]).isRequired,
  weight: validateWeight
}

function validateWeight(props, propName, component)  {
  let propertyVal = props[propName];
  if (!!propertyVal === false) {
    return new Error(propName + ' in ' + component + ' is required.');
  }
  if(typeof propertyVal === 'number') {
    if (propertyVal >= 80 && propertyVal <= 300) {
      return null;
    } else {
      return new Error(propName + ' in ' + component + " must be a number between 80 and 300");
    }
  } else {
      return new Error(propName + ' in ' + component + " must be of type 'number'.");
  }
}


export default Products
