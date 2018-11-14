import React from 'react'
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render () {
    return (
      <div className="order">
        <h1>{this.props.name}</h1>
        <ul>
          <li><strong>Producer: </strong>{this.props.producer}</li>
          <li><strong>Watermark: </strong>{this.props.hasWatermark ? 'yes' : 'no'}</li>
          <li><strong>Color: </strong>{this.props.color}</li>
          <li><strong>Weight: </strong>{this.props.weight}</li>
        </ul>
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
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];
    if (weight === undefined) {
      return new Error ("Weight is required");
    }
    if (isNaN(weight)) {
      return new Error ("Weight must be a number");
    }
    const correctWeight = weight > 80 && weight < 300
    if (!correctWeight) {
      return new Error(propName + " must fall into a range of 80 - 300")
    }
  },
}

// function paperWeight(props, propName, componentName) {
//
//   if (typeof weight === 'number') {
//     return weight > 80 && weight < 300 ? weight : new Error(propName + ' of ' + componentName + " must fall into a range of 80 - 300");
//   }
// }
