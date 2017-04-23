import React from 'react'

class Product extends React.Component {
	render() {
		return(
			<p>Name: {this.props.name}</p>
			)
	}
}



Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    var weight = props[propName];

    if (weight == undefined) {
      return new Error('The `weight` prop is required.');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }

    if (!(weight > 80 && weight < 300)) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  },
};


Product.defaultProps = {
  hasWatermark: false,
};

module.exports = Product