const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark ? 'yes' : 'no'}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
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
  weight: (props, propName) => {
    const weight = props[propName];
    const validWeight = weight > 80 && weight < 300;

    if (weight === undefined) {
      return new Error('weight is required');
    }

    if (isNaN(weight)) {
     return new Error('weight must be a number');
    }

    if (!validWeight) {
      return new Error('weight must range between 80 and 300')
    }
  }
};

module.exports = Product;
