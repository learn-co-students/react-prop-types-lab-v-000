import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
    render() {
        return (
           <div className="product">
            <h1>Name: {this.props.name}</h1>
            <p>Producer: {this.props.producer}</p>
            <p>Watermark? {this.props.hasWatermark}</p>
            <p>Color: {this.props.color} </p>
            <p>Weight: {this.props.weight}</p>
           </div> 
        );
    }
}

Product.defaultProps = {
    hasWatermark: false,
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
    weight: function(props, propName){
        if (props[propName] === undefined) {
            return new Error (`${propName} cannot be blank.`)
        }
        if (isNaN(props[propName])) {
            return new Error (`${propName} must be a number.`)
        }
        if (props[propName] < 80 || props[propName] > 300) {
            return new Error (`${propName} must be between 80 and 300.`);
        }
    }
};