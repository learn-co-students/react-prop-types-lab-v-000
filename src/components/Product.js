// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
    render() {
        return <div>
            <h3>{this.props.name}</h3>
            <p>{this.props.producer}</p>
            <p>{this.props.hasWatermark}</p>
            <p>{this.props.color}</p>
            <p>{this.props.weight}</p>
        </div>
    }
}

Product.defaultProps = {
    hasWatermark: false
}
Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(["white", 'eggshell-white', 'salmon']).isRequired,
    weight: function(props, propName, componentName) {
        const weight = props[propName];
        if (weight === undefined || weight === null) {
            return new Error('The `weight` prop is required.')
        } else if(typeof weight != 'number' || isNaN(weight)){ // NaN is a number I know
            return new Error ('Invalid type of `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed.');
        } else if (weight < 80 || weight > 300) {
            return new Error('Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed.');
        }
    }
}

export default Product