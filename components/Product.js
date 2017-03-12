const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h1>Name: {this.props.name}</h1>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark: {this.props.hasWatermark ? "Yes" : "No"}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, component){
    if (props[propName] === undefined) {
      return new Error(`Missing ${propName}`)
    } else if (typeof props[propName] !== 'number') {
      return new Error(`${propName} must be a number`)
    } else if (props[propName] < 80 || props[propName] > 300) {
      return new Error(`${propName} must be between 80 and 300.`)
    }
  }
}

module.exports = Product;
