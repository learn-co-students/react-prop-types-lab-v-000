// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return <div>
      <p>name: {this.props.name}</p>
      <p>producer: {this.props.producer}</p>
      <p>hasWatermark?: {this.props.hasWatermark ? "Yes" : "No"}</p>
      <p>color: {this.props.color}</p>
      <p>weight: {this.props.weight}</p>
    </div>
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
  // .arrayOf(PropTypes.string).isRequired
  weight: (props, propName, component) => {
    // console.log(props[propName] === undefined, isNaN(prop[propName]), (props[propName] < 80 || props[propName] > 300))
    if(props[propName] === undefined){
      return new Error(`The ${propName} is required`);
    }
    //
    if (isNaN(props[propName])) {
      return new Error('The `weight` prop is not a number.');
    }

    if(props[propName] < 80 || props[propName] > 300){
      return new Error(`${propName} was not in the ranges`)
    }
  }
};


    // name: a string — required
    // producer: a string — optional
    // hasWatermark: a boolean — optional, defaults to false
    // color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
    // weight: a number — required, ranges between 80 and 300

export default Product;
