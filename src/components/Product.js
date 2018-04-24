import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
       <p> Name:  {this.props.name} </p>
       <p> Producer:  {this.props.producer}</p>
       <p> Has Watermark: {this.props.hasWatermark ? 'Yes' : 'No'}</p>
       <p> Color:  {this.props.color} </p>
       <p> Weight:  {this.props.weight} </p>
      </div>
    );
  }
}

Product.defaultProps={
  hasWatermark: false
};

var weight_range = [];
for (var i = 80; i <= 300; i++) {
  weight_range.push(i);
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
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


export default Product;
