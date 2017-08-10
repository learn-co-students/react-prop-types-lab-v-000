import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
        <div>
            <h2>name: { this.props.name }</h2>
            <p>producer: { this.props.producer } ? {this.props.producer} : null </p>
            <p>hasWatermark?: { this.props.hasWatermark }</p>
            <p>color: { this.props.color }</p>
            <p>weight: { this.props.weight }</p>
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
    weight: (props, propName) => {

        let weight = props[propName]

        if (weight === undefined) {
            return Error(propName + ' is required.');
        }

        if (isNaN(weight)) {
            return Error(propName + ' must be a number');
        }

        if (!(weight > 80 && weight < 300)) {
            return Error(propName + ' must be between 80 and 300.');
        }
  },
};


