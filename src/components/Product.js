import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render(){
    return (
      <div>
      {this.props.name}
      {this.props.producer}
      {this.props.hasWatermark}
      {this.props.color}
      {this.props.weight}
      </div>
    )
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight(props, propName, componentName) {

    if(props[propName] < 80 || props[propName] > 300) {
      return true
    }
    if(typeof props[propName] === "string") {
      return true
    }
    if(props[propName].length > 0) {
      return true
    }
  }
}

Product.defaultProps = {
  hasWatermark: false
}
