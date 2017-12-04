// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Product Name: {this.props.name}</li>
                    <li>Producer: {this.props.producer}</li>
                    <li>Watermark: {this.props.hasWatermark ? "Yes" : "No"}</li>
                    <li>Color: {this.props.color}</li>
                    <li>Weight: {this.props.weight}</li>
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
    color: PropTypes.oneOf(
        [
            'white',
            'eggshell-white',
            'salmon'
        ]
    ).isRequired,
    weight: (props, propName) => {
        const weight = props[propName];
        const isValidWeight = (weight > 80 && weight < 300);

        if (weight === undefined) {
            return new Error('The weight prop given is undefined.');
        }

        if (isNaN(weight)) {
            return new Error('The weight prop given is not a number.');
        }

        if (!isValidWeight) {
            return new Error('The weight prop given is not in the valid range of 80 to 300.');
        }
    }
};