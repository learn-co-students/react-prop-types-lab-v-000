import React from 'react';

export default class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h1>{this.props.name}</h1>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
      )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];
    
    if (weight == undefined) {
      return new Error('The `weight` prop is required');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop must be a number');
    }

    if (weight < 80 || weight > 300) {
     return new Error('The `weight` must be a number from 80 to 300.');  
    }
  }
};

