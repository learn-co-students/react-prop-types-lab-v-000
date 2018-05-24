import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component{
  render(){
    return(
      <div>
        <h2>{this.props.name} - {this.props.producer}</h2>
        <p>Color: {this.props.color}{this.props.hasWatermark ? " - Watermarked" : ""}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
  }
}

let weightRange = [];
for(let i = 80; i < 301; i++){
  weightRange.push(i)
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(weightRange).isRequired
}
