import React from 'react'

class Product extends React.Component {
	render(){
		return <div>
		<p>{this.props.name}</p>
		<p>{this.props.producer}</p>
		<p>{this.props.hasWatermark}</p>
		<p>{this.props.color}</p>
		<p>{this.props.weight}</p>
		</div>
	}
}

Product.defaultProps = {
	hasWatermark: false
}

Product.propTypes = {
	name: React.PropTypes.string.isRequired,
	producer: React.PropTypes.string,
	hasWatermark: React.PropTypes.bool.isRequired,
	color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	weight: function(props, propName, componentName){
		if (props[propName] === undefined){
			return new Error( "This property is required")
		} else if (isNaN(props[propName])){
			return new Error( "Should be a number")
		}
		else if (props[propName] < 80 || props[propName] > 300){
			return new Error(
				"Should be from 80 to 300")
		}
	}
}

export default Product
