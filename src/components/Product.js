import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
    render(){
        return (
            <div className="product">
                <h1>Product name: {this.props.name}</h1>
                <p>Producer: {this.props.producer} </p>
                <p>Watermark: {this.props.hasWatermark} </p>
                <p>Color: {this.props.color} </p>
                <p>Weight: {this.props.weight} </p>
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
    weight: function(props, propName){
        const w = props[propName];
        const isValidW = w > 80 && w < 300;

        // Weight is required
        if (w === undefined) {
            return new Error('Weight is required');
        } 

        // Weight should be a number
        if (isNaN(w)) {
            return new Error('Weight is not a number');
        }

        // Weight needs to be in range
        if (!isValidW) {
            return new Error('Not valid weight between 80 and 300');
        }
    }
}

export default Product;