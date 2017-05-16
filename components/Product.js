import React from 'react';

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark: {this.props.hasWatermark ? 'true':'false'}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
  }
};

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];
    const validWeight = weight > 80 && weight < 300

    if (weight == undefined) {
      return new Error('The `weight` prop is required');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop must be a number');
    }

    if (!validWeight) {
     return new Error('The `weight` must be a number from 80 to 300.');  
    }
  }
};