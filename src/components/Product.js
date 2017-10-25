import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render(){
    return (
      <div className="Product">
      <ul>
        <li>{this.props.name}</li>
      </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,

}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    let weight = props[propName];

    if (weight === undefined) {
      return new Error("You must enter a weight");
    }
    if (isNaN(weight)) {
      return new Error("Must be a number");
    }
    return weight >= 80 && weight <= 300 ? null  : new Error("Must be within range");
  }
};
