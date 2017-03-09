const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>Watermark: {this.props.hasWatermark}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white','salmon']).isRequired,
  weight: function (props, propName, componentName) {
      if (props[propName] < 80 || props[propName] > 300) {
        return new Error(
          'Invalid value for `' + propName + '` supplied to' +
          ' `' + componentName + '`. Validation failed.'
        );
      } 

      if (props[propName] === undefined ) {
        return new Error(
          'missing ${propName}'
        );
      }

      if (isNaN(props[propName] )) {
        return new Error(
          'not a number'
        );
      }
    },
};


module.exports = Product;