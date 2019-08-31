import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
    render () {
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Producer: {this.props.producer}</p>
                <p>Watermark: {this.props.hasWatermark}</p>
                <p>Color: {this.props.color}</p>
                <p>Weight: {this.props.color}</p>
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
        const weight = props[propName];

        if (weight === undefined) {
            return new Error('The `weight` prop is required.');
        }

        if (isNaN(weight)) {
            return new Error('The `weight` prop is not a number.');
        }

        const isValidWeight = weight > 80 && weight < 300;

        if (!isValidWeight) {
            return new Error('The `weight` prop should range between 80 and 300.');
        }
    },
};

