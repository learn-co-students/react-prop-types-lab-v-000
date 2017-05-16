import React from 'react';

class Product extends React.Component {
  render() {
    return(
      <div className="product">
        <h2>Name: {this.props.name}</h2>
        <ul>
          <li>Producer: {this.props.producer}</li>
          <li>Watermark: {this.props.hasWatermark ? 'Yes' : 'No'}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: customValidator
}

function customValidator(props, propName, componentName) {

  let value = props[propName];

  if(value === undefined) {
    return new Error('The ' + props[propName] + ' prop is required')
  } else if (isNaN(value)) {
    return new Error('The ' + props[propName] + ' prop is not a number')
  } else if (value < 80 || value > 300) {
    return new Error('The ' + props[propName] + ' prop must be between 80 and 300')
  }

  return null;
};


export default Product