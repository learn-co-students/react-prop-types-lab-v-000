import React from 'react';

class Product extends React.Component  {
  render()  {
    return (
      <div className="product">
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Producer: {this.props.producer}</li>
          <li>Has Watermakr: {this.props.hasWatermark}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
      </div>
          
          );
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  hasWatermark: React.PropTypes.bool,
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  color: React.PropTypes.oneOf(['white', 'eggshell-white','salmon']).isRequired,
  weight: (props, keyName) => {
    const weight = props[keyName];

    if (weight === undefined) {
      return new Error('The `weight` prop is required');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }

    const isValid = weight > 80 && weight < 300;

    if (!isValid) {
      return new Error('The `weight` prop should be between 80 and 300.')
    }
  }
};



module.exports = Product