// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {

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

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'salmon', 'eggshell-white']).isRequired,
  weight: function(props, propName) {
    var weight = props[propName]
    if (weight === undefined){
      return new Error ('The `weight` prop validator is accepting types other than a number.')
    }
    if (isNaN(weight)){
      return new Error ('Gotta be a number')
    }
    if (!(weight < 300 && weight > 80)) {
      return new Error(
        'Invalid prop. Validation failed.'
      );
    }
},
  //weight: PropTypes.shape({
//    customerName: PropTypes.string.isRequired,
  //  orderedAt: PropTypes.number.isRequired // We're using UNIX timestamps here
  //}).isRequired
};

export default Product;
