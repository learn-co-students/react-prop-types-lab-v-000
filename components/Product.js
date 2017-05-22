import React from 'react';

class Product extends React.Component {
  render() {
    return(
      <div className="product">
        <h2>{this.props.name}</h2>
        <ul>
          <li>Produced by {this.props.producer}</li>
          <li>{this.props.hasWatermark ? 'Has watermark' : 'No watermark'}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }
};

Product.defaultProps = {
  hasWatermark: false
};

function paperWeight(props, propName, componentName){
  let value = props[propName]
  if (value === undefined) {
    return new Error(`${propName} must be present`)
  } else {
    if (isNaN(value)) {
      return new Error(`${propName} must be a number`)
    } else {
      if (value < 80 || value > 300) {
        return new Error(`${propName} must be between 80 and 300`)
      } else {
        return null
      }
    }
  }
};

Product.propTypes = {
  producer: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: paperWeight
};

export default Product
