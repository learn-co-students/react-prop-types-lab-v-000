import React from 'react';

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <title>{this.props.name}</title>
        <ul>
          {this.props.producer ? <li>Producer: {this.props.producer}</li> : null}
          <li>Has Watermark?: {this.props.hasWatermark ? 'Watermarked' : 'Not watermarked'}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
      </div>
    );
  }
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName]

    if (weight === undefined) {
      return new Error('The `weight` prop is required.')
    }

    if (isNaN(weight)) {
      return new Error('the `weight` prop is not a number.')
    }

    const isValidWeight = weight > 80 && weight < 300

    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.')
    }
  }
}

Product.defaultProps = {
  hasWatermark: false,
}
