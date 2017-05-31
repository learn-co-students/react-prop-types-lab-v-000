import React from 'react';
// import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <p>{this.name}</p>
      </div>
    )
  }
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  // weight: React.PropTypes.oneOf(Array(301-80).fill(80).map((e, i) => e + i)).isRequired
  weight: function(props, propName, componentName) {
    const weight = props[propName];
    if (typeof weight !== 'number' || weight > 300 || weight < 80) {
      // return new Error('Invalid ' + propName + 'supplied to ' + componentName + '. Validation failed.');
      console.error('Invalid ' + propName + 'supplied to ' + componentName + '. Validation failed.');
    }
  }
};

Product.defaultProps = {
  hasWatermark: false
};


// name: a string — required
// producer: a string — optional
// hasWatermark: a boolean — optional, defaults to false
// color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
// weight: a number — required, ranges between 80 and 300
// Note: for the weight prop, we'll need custom logic. Remember that it's possible to write your own prop validator function!
