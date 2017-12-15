// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render(){
    return(
      <div>
        <h1>{this.props.name} </h1>
        <h3>{this.props.producer} </h3>
        <h3>{this.props.hasWatermark} </h3>
        <h3>{this.props.color.join(', ')} </h3>
        <h3>{this.props.weight} </h3>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.arrayOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.number
};
