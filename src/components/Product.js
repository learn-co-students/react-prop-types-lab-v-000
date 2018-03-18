// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'
import { range } from 'react-range-proptypes';

class Product extends React.Component {
    render(){
        return (
            <div>
                <h3>Name: {this.props.name}</h3>
                <h3>Producer: {this.props.producer}</h3>
                <h3>Watermark: {this.props.hasWatermark ? 'Yes' : 'No'}</h3>
                <h3>color: {this.props.color}</h3>
                <h3>weight: {this.props.weight}</h3>
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
    color: PropTypes.oneOf([
        'white',
        'eggshell-white',
        'salmon'        
    ]).isRequired,
    weight: range(80,300).isRequired
}

export default Product;