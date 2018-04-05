import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }  
}

Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white','salmon']).isRequired,
  weight: function(props, propName) {
    if (props[propName] === undefined){
      return new Error('The weight property is required.')
    } 
    if (isNaN(props[propName])) {
      return new Error('The weight property is not a number.')
    }
    if (props[propName] < 80 || props[propName] > 300) {
      return new Error('The weight prop should range between 80 and 300.');
   }
  }
}