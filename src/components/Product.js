// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types';

class Product extends React.Component {
  render(){
    return(
      <div class="Product">
        <h2>this.props.name</h2>
        <p>Producer: this.props.preducer</p>
        <span>this.props.hasWatermark</span>
        <p>Color: this.props.color</p>
        <p>Weight: this.props.weight</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}


Product.PropTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, PropName, componentName) {
    if (props[propName]) {
      let value = props[propName];

      if (sNaN(value)) {
          return new Error(propName + ' in ' + componentName + " is not an integer");
      }

      else if (value >= 80 && value <= 300) {
          return new Error(propName + ' in ' + componentName + " is not between 80 and 300");
      }
    }
    return null;
  }.isRequired
};

export default Product;
