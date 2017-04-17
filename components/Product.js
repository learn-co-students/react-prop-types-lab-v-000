import React from 'react'

export default class Product extends React.Component {
  render(){
    return(
      <div>
        <h1>name: {this.props.name} </h1>
        <h3>producer: {this.props.producer} </h3>
        <h3>has a watermark: {this.props.hasWatermark}</h3>
        <h3>color: {this.props.color} </h3>
        <h3>weight: {this.props.weight} </h3>
      </div>
      )
  }
}

//default props
Product.defaultProps = {
  hasWatermark: false
}


//propTypes
Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white','salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];

    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }

    const isValidWeight = weight > 80 && weight < 300;

    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  }
}
