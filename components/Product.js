const React = require('react');

const min = 80;
const max = 300;

var weightRange = function(min, max) {
  let weights = [];
  do {
    weights.push(min);
    min++;
  } while (min <= max);

  return weights;
}
class Product extends React.Component {
    render() {
      return (
        <div>
          <p>Product name: {this.props.name}</p>
          <p>Producer: {this.props.producer}</p>
          <p>Watermark: {this.props.hasWatermark.toString()}</p>
          <p>Color: {this.props.color}</p>
          <p>Weight: {this.props.weight}</p>
        </div>
      );
    }
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(["white", "eggshell-white", "salmon"]).isRequired,
  weight: React.PropTypes.oneOf(weightRange(min, max)).isRequired
};

Product.defaultProps = {
  hasWatermark: false
};

module.exports = Product;
