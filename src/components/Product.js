import React from 'react';
import PropTypes from 'prop-types';


export default class Product extends React.Component {
  render() {
    return (
      <div className="ship">
          <p>{this.props.name} </p>
          <p>{this.props.producer}</p>
          <p>{this.props.hasWatermark}</p>
          <p>{this.props.color}</p>
          <p>{this.props.weight}</p>

      </div>
    );
  }
}
//default
Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    
    hasWatermark: PropTypes.bool,
    color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,

    weight: isWeight

};

function isWeight(props, propName){
    var weight = props[propName];
    if (weight === undefined) {
      return new Error('The `weight` prop undefined.');
    }

    if (isNaN(weight)) {    
      return new Error('The `weight` prop is NaN.');
    }

    if (80 > weight || weight > 300){
        return new Error('must be between 80 & 300');
    }
}


