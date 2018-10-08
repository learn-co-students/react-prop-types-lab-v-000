// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {

  render() {
    return (
      <div className="product">
        <h1>Product Name: {this.props.name}</h1>
        <p>Producer: {this.props.producer}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    );
  }
}

Product.defaultProps = {
  name: "Dunder Mifflin",
  producer: "PaperCO",
  hasWatermark: true,
  color: ['white', 'eggshell-white' ,'salmon'],
  weight: [80,300]
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,

  color: PropTypes.arrayOf(PropTypes.string).isRequired,
  weight: PropTypes.objectOf(PropTypes.number).isRequired,


};
