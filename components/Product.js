import React from 'react';

export default class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h1>Name: {this.props.name}</h1>
        <ul>
          <li>Producer: {this.props.producer}</li>
          <li>Watermark: {this.props.hasWatermark ? 'watermark' : 'no watermark'}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
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
  weight: function(props, propName, componentName) {
    const weight = props[propName];

    if(weight == undefined) {
      return new Error('The weight prop is required')
    }

    if(isNaN(weight)) {
      return new Error('The weight prop is not a valid number')
    }

    if(weight < 80 || weight > 300) {
      return new Error('Weight must be between 80 and 300')
    }
  }
}
