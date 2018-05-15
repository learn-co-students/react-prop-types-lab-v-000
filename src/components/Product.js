import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render(){
    return (
      <div className="product">
        <h3>{this.props.name}</h3>
        <h3>{this.props.producer}</h3>
        <h3>{this.props.hasWatermark}</h3>
        <h3>{this.props.color}</h3>
        <h3>{this.props.weight}</h3>
      </div>
    );
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
  weight: (props, propName) => {
    const weight = props[propName];
    if(weight === undefined){
      return new Error (`missing weight prop`);
    }
    if(isNaN(weight) ){
      return new Error('the weight prop is not a number')
    }
    if (weight > 300 || weight < 80){
      return new Error('weight has to be between 80 and 300')
    }
  }
}
