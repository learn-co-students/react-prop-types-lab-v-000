import React from 'react';

export default class Product extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <ul>
          <li>Has Watermark: {this.props.hasWatermark ? 'Yes' : 'No'}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark:  false
}

function validateWeight(props, propName) {

  if(!(propName in props)) {
    return new Error(`missing ${propName}`);
  }
  if( (typeof props[propName]) != 'number' ) {
    return new Error(`${propName} must be integer`);
  }
  if(props[propName] < 80 || props[propName] > 300) {
    return new Error(`${propName} out of range.`);
  }
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: validateWeight
}
