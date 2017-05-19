import React from 'react';

class Product extends React.Component {
  render() {
    return(
    <ul>
      <li>{this.props.name}</li>
      <li>{this.props.producer}</li>
      <li>{this.props.hasWatermark}</li>
      <li>{this.props.color}</li>
      <li>{this.props.weight}</li>
    </ul>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    let weight = props[propName];
    
    if (weight === undefined) {
      return new Error("Sorry you must include a number for weight.");
    }

    if (isNaN(weight)) {
      return new Error("Sorry weight must be a number.");
    }

    return weight >= 80 && weight <= 300 ? null : new Error("Must be within range of 80 to 300");
  }
};

export default Product
