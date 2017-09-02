import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
    render() {
        return (
            <div>
            <h1>{this.props.name}</h1>
            <p>{this.props.producer}</p>
            <p>{this.props.hasWatermark}</p>
            <p>{this.props.color}</p>
            <p>{this.props.weight}</p>
            </div>
        );
    }
};

Product.defaultProps = {
    hasWatermark: false
};

Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
    weight: (props, propName) =>{
        const weight = props[propName];
        if (weight === undefined) return new Error('Weight is required');
        if (isNaN(weight)) return new Error('Weight must be a number');
        if (weight < 80 || weight > 300) return new Error('Weight must be between 80 and 300')
    }
};
