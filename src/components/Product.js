import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Product extends React.Component {
    render () {
        return (
            <div className="product">
            <p>Name: {this.props.name}</p>
            <p>Producer: {this.props.producer}</p>
            <p>Watermark: {this.props.hasWatermark ? 'Yes' : 'No' }</p>
            <p>Color: {this.props.color}</p>
            <p>Weight: {this.props.weight}</p>
            </div>
        )
    }
};


function customWeight(props, propName, componentName) {
     if (!(props[propName])) {
        return new Error(
            'Prop `' + propName + '` missing from ' + ' `' + componentName + '`. Validation failed.'
            );
     } else if ( typeof (props[propName]) !== 'number' ) {
        return new Error(
            'Invalid prop `' + propName + '` is not a number and supplied to' + ' `' + componentName + '`. Validation failed.'
            );
        } else if ( props[propName] < 81 || props[propName] > 299 ) {
        return new Error(
            'Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed.'
            );
        }
};

Product.defaultProps = {
    hasWatermark: false,
};



Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
    weight: customWeight
}

export default Product;
