import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return(
      <div className="product">
        <h1>{this.props.name}</h1>
        <h3>{this.props.producer}</h3>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
        <small>{this.props.hasWatermark ? 'Watermarked' : 'Unmarked'}</small>
      </div>
    );
  }
}

function weightCheck(prop, propName, componentName) {
  var weight = prop[propName];
  if(!weight) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Prop is undefined. Validation failed.'
    );
  } else if(typeof weight !== "number") {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Weight must be a number, not a ' + typeof weight + '. Validation failed.'
    );
  } else if(80 > weight || 300 < weight) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. ' + weight + ' is not in the range of 8-300. Validation failed.'
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightCheck
}
