import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <p>{this.props.name}</p>
        <ul>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function (props, propName) {
    const weight = props[propName]
    if (props[propName] === undefined) {
        return new Error("Weight can't be blank");
      } if (typeof weight !== 'number') {
        return new Error('The weight must be a number');
      } else if (weight < 80 || weight > 300) {
        return new Error('Weight must be between 80 and 300');
      }
    }
  }

export default Product;
