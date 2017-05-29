import React from 'react';

export default class Product extends React.Component {
    render() {
        return(
        <div>
            name: {this.props.name}
            producer: {this.props.producer ? this.props.producer : null}
            watermark: {this.props.hasWatermark ? 'Watermarked' : 'Not watermarked'}
            weight: {this.props.weight}
        </div>
        )
    }
}


Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName) {
    
    let weight = props[propName];
      
         
    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }
      
    const isValidWeight = weight > 80 && weight < 300;

    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
   
      
  },
};