// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
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
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  weight: function(props, propName) {
    const weight = props[propName]

    if(weight < 80 || weight > 300){
      return (`${propName} has to be between 80 and 300`)
    }
    if (weight === undefined) {
     return new Error('The `weight` prop is required.');
    }
    if (isNaN(weight)){
    return new Error(`${propName} has to be a number.`)
  }
  }
};
