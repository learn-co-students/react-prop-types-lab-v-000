import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

export default class Product extends React.Component {

  render() {
    return (
      <div className="order">
        <ul>
        </ul>
      </div>
    );
  }
}


Product.defaultProps = {
  hasWatermark: false
};


Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightChecker
};

function weightChecker(props, propName, componentName) {
  let weight = props[propName];

  if ((weight < 80) || (weight > 300)) {
    return new Error("Weight must be in between 80 and 300");
  }

  if ((weight === undefined) || (weight === null)) {
    return new Error("Weight is required");
  }

  if (typeof(weight) !== 'number') {
    return new Error("Weight must be a number");
  }
}
