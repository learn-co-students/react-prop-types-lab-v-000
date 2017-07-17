import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render(){
    return(
      <div>
      <p>name: {this.props.name}</p>
      <p>producer: {this.props.producer ? this.props.producer : 'none'}</p>
      <p>watermark : {this.props.hasWatermark ? 'yes' : 'no'}</p>
      <p>color: {this.props.color}</p>
      <p>weight: {this.props.weight}</p>
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
  weight: function(props, propName){
    const weight = props[propName];

    if (weight === undefined) {
      return new Error("The weight is required.")
    }
    else if (isNaN(weight)) {
      return new Error('The weight must be a  number.')
    }
    else if ((weight < 80) || (weight > 300)) {
      return new Error('The weight is not valid.')
    }
  }
};
