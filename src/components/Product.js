import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
    render() {
        return (
            <div>
                <h3>{ this.props.name }</h3>
                <ul>
                    <li>Producer{ this.props.producer }</li>
                    <li>Watermark: { this.props.hasWatermark ? 'Yes' : 'No' }</li>
                    <li>Color: { this.props.color }</li>
                    <li>Weight: { this.props.weight }</li>
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
    weight: (props, propName) => {
        var weight = props[propName];
        
        // .isRequired
        if (weight === undefined) {
          return new Error('The `weight` prop is required.');
        }
        
        // .number
        if (isNaN(weight)) {
          return new Error('The `weight` prop must be a number.');
        }
        
        // between specific range
        var valid = weight > 80 && weight < 300;
    
        if (!valid) {
          return new Error('The `weight` prop must be between 80 and 300.');
        }
    }
};