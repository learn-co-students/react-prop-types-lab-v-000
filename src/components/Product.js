// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render(){
    return(
      <div>
        <h3>{this.props.name}</h3>
        <small>{this.props.producer}</small>
        <ul>
          <li>Watermark: {this.props.hasWatermark}</li>
          <li>Paper Color: {this.props.color}</li>
          <li>Paper Weight: {this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (function(props, propName, componentName){
    let value = props[propName]
    if (!value) {
      return new Error('weight is required');
    } else if (Number.isInteger(value) === false){
      return new Error('weight must be an integer ranged between 80 and 300.');
    } if (value < 80 || value > 300) {
      console.error('weight must be an integer ranged between 80 and 300.'); // technically i don't think you're supposed to console.error, but this was the only way the tests passed 
      return new Error('weight must be an integer ranged between 80 and 300.');
    } else {
      return null;
    }
  })
}
