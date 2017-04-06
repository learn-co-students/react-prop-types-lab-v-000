const React = require('react')


class Product extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

function weightValidator(props, propName, componentName) {

  let weight = props[propName];
  if (!weight) {
    return new Error("Weight is a required field");
  } else if (typeof weight !== 'number' ) {
    return new Error("Weight has to be a number");
  } else if (weight < 80 || weight > 300) {
    return new Error("Weight has to be between 80 and 300");
  }
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightValidator
}


module.exports = Product
