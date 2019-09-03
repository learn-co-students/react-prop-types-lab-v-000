import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
    render() {
        return (
            <div className="product">
                <h1>{this.props.name}</h1>
                <p>{this.props.producer}</p>
                <p>{this.props.hasWatermark}</p>
                <p>{this.props.color}</p>
                <p>{this.props.weight}</p>
            </div>
        )
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
    weight: function (props, propName, componentName) {
        const value = props[propName];
     
        if (value < 80 || value > 300) {
                return new Error(
                    'Invalid prop `' + propName + '` supplied to' +
                    ' `' + componentName + '`. Weight is not in correct range.');
        } 
        if (value === undefined) {
            return new Error(
                'Invalid prop `' + propName + '` supplied to' +
                ' `' + componentName + '`. Weight is required.');
        }
        if (isNaN(value)) {
            return new Error(
                'Invalid prop `' + propName + '` supplied to' +
                ' `' + componentName + '`. Weight is not a number.');
        }
    }
}