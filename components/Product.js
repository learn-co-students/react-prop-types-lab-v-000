import React from 'react'

export default class Product extends React.Component {
  render () {
    return (
      <div className="product">
        <h2>Name: {this.props.name}</h2>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark: {this.props.hasWatermark ? 'Yes' : 'No'}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
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
    const weight = props[propName]
    const isValidWeight = weight > 80 && weight < 300

    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    } else if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    } else if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  },
}
