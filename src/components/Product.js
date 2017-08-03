import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="products">
        <ul>
          <li>{this.props.name} </li>
          <li>{this.props.producer} </li>
          <li>{this.props.hasWatermark} </li>
          <li>{this.props.color} </li>
          <li>{this.props.weight} </li>
        </ul>
       </div>
    )
  }
}


Product.defaultProps = {
  hasWatermark: false
}



function weightRange(props, propName, componentName) {
  if (!props[propName]) {
    return new Error (
      'You must enter a ' + propName
    )
  }
  else if ((props[propName] < 80) || (props[propName] > 300)) {
    return new Error(
      componentName + 'requires that' + propName + 'be between 80 and 300.'
    );
  } else if (isNaN(props[propName])) {
    return new Error(
      propName + 'must be a number.'
    )
  }
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: weightRange
  }




export default Product;