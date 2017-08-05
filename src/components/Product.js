// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';


class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <ul>
          <h2>{this.props.name}</h2>
          <h2>{this.props.producer}</h2>
          <h2>{this.props.hasWatermark}</h2>
          <h2>{this.props.color}</h2>
          <h2>{this.props.weight}</h2>
          </ul>
      </div>
    );
  }
}

var weight_arr = [];
for(let i = 80; i < 301; i++){
  weight_arr.push(i);
}

var paper_colors = ['white', 'eggshell-white', 'salmon']


Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(paper_colors).isRequired,
  weight: PropTypes.oneOf(weight_arr).isRequired
 }

 Product.defaultProps = {
    hasWatermark: false,
  }

export default Product
