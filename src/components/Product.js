// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return(
  <div class="product">
    <p>{this.props.name}</p>
    <p>{this.props.producer}</p>
    <p>{this.props.hasWatermark}</p>
    <p>{this.props.color}</p>
    <p>{this.props.weight}</p>
    </div>
  )
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    if(props[propName] < 80 || props[propName] > 300) {
      return new Error("The weight is not between the allowed range.")
    } else if (props[propName] === undefined) {
        return new Error("You didn't enter a weight");
    } else if (isNaN(props[propName])){
        return new Error("You entered the wrong number")
    }
  }

}
Product.defaultProps = {
  hasWatermark: false,


}
