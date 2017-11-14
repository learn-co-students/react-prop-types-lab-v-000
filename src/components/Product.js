import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const {name, producer, hasWatermark, color, weight} = this.props;

    return (
      <div>
        <h3>{name}</h3>
        <ul>
          <li>Producer: {producer}</li>
          <li>Watermark: {hasWatermark ? "Yes" : "No"}</li>
          <li>Color: {color}</li>
          <li>Weight: {weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

const weightValidator = (props, propName) => {
  const weightValue = props[propName];
  if (!weightValue) {
    return new Error("Weight is not defined");
  }
  if (typeof weightValue !== "number") {
    return new Error("Weight is not a number");
  }
  if (weightValue <= 80 || weightValue >= 300) {
    return new Error("Weight is not within range 80 to 300");
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightValidator
}



export default Product;
