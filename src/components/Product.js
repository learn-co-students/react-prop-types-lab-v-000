import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component{
	render(){
		return(
			<div>
				<p>{this.props.name}</p>
				<p>{this.props.producer}</p>
				<p>{this.props.hasWatermark}</p>
				<p>{this.props.color}</p>
				<p>{this.props.weight}</p>
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
	color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	weight: weights
}

function weights(props, propName){
	const weightProp = props[propName]

	if(!weightProp){
		return new Error('prop required')
	}

	if (isNaN(weightProp)){
		return new Error('prop must be a number')
	}

	if (weightProp < 80 || weightProp > 300){
	  return new Error('weight must be between 80-300.')
	}
}


export default Product
