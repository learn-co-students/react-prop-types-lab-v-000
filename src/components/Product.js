import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component{
  render(){
    const {name, producer, hasWatermark, color, weight} = this.props;
    return(
      <div className="paper">
        <h3>{name}</h3>
        <p>{producer}</p>
        <p>{hasWatermark ? true : false}</p>
        <p>{color}</p>
        <p>{weight}</p>
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
  weight: (props, propName) => {
    let weight = props[propName];
    let validWeight = weight > 80 && weight < 300;
    if(weight === undefined){
      return new Error('The `weight` prop is required.')
    }else if(isNaN(weight)){
      return new Error('the `weight` prop must be a number.')
    }else if(!validWeight){
      return new Error('The `weight` prop needs to be between 80 and 300.')
    }
  }
}

export default Product;
