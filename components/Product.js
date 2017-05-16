import React from 'react';
import ReactDOM from 'react-dom';

export default class Product extends React.Component {
  render(){
    return (
      <div className="product">
        <h2>Name: {this.props.name}</h2>
        <ul>
          <li>Producer: {this.props.producer}</li>
          <li>Watermark: {this.props.hasWatermark}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
      </div>
    );
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
  weight: function(props, propName, componentName){
    const value = props[propName];
    if (value != 'number') {
      return new Error(value + " should be a number")
    }
    if (value < 80 || value > 300) {
      return new Error(value + " should be between 80 and 300")
    }
  }
}
