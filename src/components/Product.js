import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p><b>Producer:</b> {this.props.producer}</p>
        <p><b>Watermark?:</b>{this.props.hasWatermark ? "Yes" : "No"}</p>
        <p><b>Color:</b>{this.props.color}</p>
        <p><b>Weight:</b>{this.props.weight}</p>
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
  weight: (props, propName, componentName) => {
    //debugger
      //props =>
      //{name: "Dunder Mifflin", producer: "PaperCo", color: "white", weight: 210, hasWatermark: false}
      //propName => "weight"
      //props[propName] => 210
      //componentName (optional) => "Product"
    const weight = props[propName]; //210

    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }

    const isValidWeight = weight > 80 && weight < 300;

    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  },
};
