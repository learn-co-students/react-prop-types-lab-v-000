import React from 'react'
import PropTypes from 'prop-types';


export default class Product extends React.Component {
  render() {
    return <p> {this.props.name} - Producer: {this.props.producer} - has watermark? {this.props.hasWatermark ? 'true' : 'false'} - color: {this.props.color} weight: {this.props.weight} </p>
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

  weight: PropTypes.number.isRequired, function(props, propName, componentName) {

   if (props.weight > 300 || props.weight < 80) {
     return new Error(
       'Invalid prop `' + propName + '` supplied to' +
       ' `' + componentName + '`. Validation failed.'
     );
   }
 }



}
