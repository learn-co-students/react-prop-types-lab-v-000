import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <p>Name: {this.props.name}</p>
        <p>Producer: {this.props.producer}</p>
        <div>{this.props.hasWatermark}</div>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

let lowEnd = 80;
let highEnd = 300;
let arr = [];
while(lowEnd <= highEnd) {
   arr.push(lowEnd++);
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(arr).isRequired
}

export default Product;