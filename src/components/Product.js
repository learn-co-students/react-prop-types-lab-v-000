import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render () {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <ul>
          <li>Producer: {this.props.producer}</li>
          {function(){if(this.props.hasWatermark){return <li>Watermarked</li>}}}
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
      </div>
    );
  }
}

//const WeightRange = function(props, propName, componentName) {
//  if(props[propName] === null) {
//    return new Error('Invalid weight.');
//  } else if(typeof props[propName] !== "number") {
//    return new Error('Invalid weight.');
//  } else if(props[propName] < 80 || props[propName] > 300){
//    return new Error('Invalid weight.');
//  } 
//}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    if(isNaN(props[propName])) {
      return new Error('Invalid weight.');
    }
    if(props[propName] < 80 || props[propName] > 300){
      return new Error('Invalid weight.');
    }
  }
}

export default Product