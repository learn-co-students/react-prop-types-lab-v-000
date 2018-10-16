// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';


export default class Product extends React.Component {
  // your code here


  static defaultProps = {
   hasWatermark: false,
 };

  render() {
    const { name, producer, hasWatermark, color, weight } = this.props;
    return (
      <div>
        {name}
        {producer}
        {hasWatermark}
        {color}
        {weight}
      </div>

   )
 }
}

Product.propTypes = {};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
   const weight = props[propName];

   if (weight === undefined) {
     return new Error('The `weight` prop is required.');
   }

   if (isNaN(weight)) {
     return new Error('The `weight` prop is not a number.');
   }

   const weightValidity = weight > 80 && weight < 300;

   if (!weightValidity) {
     return new Error('The `weight` prop should range between 80 and 300.');
   }
 },
};
