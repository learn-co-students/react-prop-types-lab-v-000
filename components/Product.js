const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <p>Name: {this.props.name}</p>
        <p>Producer: {this.props.producer} </p>
        <p>Watermark: {this.props.hasWatermark? 'Watermark' : 'No Watermark'} </p>
        <p>Colors Available: {this.props.color} </p>
        <p>Weight: {this.props.weight}</p>
      </div>
    );
  }
}


Product.defaultProps = {
  hasWatermark: false, 
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    const weight = props[propName];
    console.log(props)  // the actual object 
    console.log(propName) // the key (the props name)
    console.log(componentName)  //the name of the component - this didn't need to be passed in this case 

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
  },
};


module.exports = Product;