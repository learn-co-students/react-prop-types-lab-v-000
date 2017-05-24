import React from 'react'

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: function (props, propName) {
    var weight = props[propName];
    var validWeight = weight > 80 && weight < 300;

    if (weight === undefined) {
      return new Error('The `weight` prop is required and must be a number.');
    }

    else if (isNaN(weight)) {
      return new Error('The `weight` prop must be a number')
    }

    if (!validWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  }
}
