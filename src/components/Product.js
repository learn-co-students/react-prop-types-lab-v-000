// Code Product Component Here
//
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Product extends React.Component {

        render() {

                return (
                        <div>
                                <h1>{this.props.name}</h1>
                                <p>{this.props.speed}</p>
                                <small>Colors: {this.props.colors}</small>
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
	weight: PropTypes.oneOf([...Array(300).keys()].slice(80,300)).isRequired
    };

export default Product;
