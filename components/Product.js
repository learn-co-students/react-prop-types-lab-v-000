const React = require('react');

class Product extends React.Component{
  render(){
    return(
      <div>
        <p> Name: {this.props.name}  </p>
        <p> Producer: {this.props.producer } </p>
        <p> Watermark: {this.props.hasWatermark ? "Yes": "No Watermark"} </p>
        <p> Color: {this.props.color} </p>
        <p> Weight: {this.props.weight} </p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,

}


Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white','salmon']).isRequired,
  weight: (props) => {
  
    const weight = props.weight 

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


module.exports = Product;