import React from 'react';
import PropTypes from 'prop-types'

export default class Product extends React.Component {
    render () {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>Produced by {this.props.producer || "Dunder Mifflin"}.</p>
                <p>There is {this.props.hasWatermark ? "" : "not "}a watermark.</p>
                <p>Available in {this.props.color}.</p>
                <p>Weight: {this.props.weight}</p>
            </div>
        )
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
    weight: function(props, propName, componentName) {
        if (props[propName] < 80 || props[propName] > 300) {
            return new Error(
                'Weight must be between 80 and 300.'
            );
        }
        if (props[propName].length < 1) {
            return new Error(
                'Weight is required.'
            );
        }
        if (!/^\d+$/.test(props[propName])) {
            return new Error(
                'Weight must be a number.'
            );
        }
    }
};