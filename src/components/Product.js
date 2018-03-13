// Code Product Component Here
// Code The Spaceship Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h1>Name: {this.props.name} </h1>
        <p>Producer: {this.props.producer} </p>
        <p>HasWatermark: {this.props.hasWatermark} </p>
        <p>Color: {this.props.colors} </p>
        <p>Weight: {this.props.weight} </p>
      </div>
    )
  }
};

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: isValidWeight,
}

  function isValidWeight(props, propName, componentName){
  let weight = props[propName]
  if (weight === undefined) {
    return new Error(`Required prop ${propName}`)
  } else if (isNaN(weight)) {
    return new Error(`${propName} must be a number`)
  } else if (weight < 80 || weight > 300) {
    return new Error(`${propName} is not between 80 and 300`)
  }

};

// OR declare your component first, and then:
export default Product;
