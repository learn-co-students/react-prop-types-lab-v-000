import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Product extends Component{
    render(){
        const {name, producer, hasWatermark, color, weight} = this.props
        return(

            <div>
            <p>Name: {name}</p>
            <p>Producer: {producer}</p>
            <p>Has Watermark: {hasWatermark ? 'yes' : 'no'}</p>
            <p>Color: {color}</p>
            <p>Weight: {weight}</p>
            </div>
        )
    }
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white', 'eggshell-white','salmon']).isRequired,

    weight: (props, propName)=>{
        const weight = props[propName]

        if (weight === undefined)
            return new Error ("Weight is required")
        else if (isNaN(weight))
            return new Error ("Weight must be a number")
        else if (weight < 80 || weight > 300)  
            return new Error ("Invalid weight")
    }
}

Product.defaultProps = {
    hasWatermark: false
}


