import React from 'react'

export default class Product extends React.Component {
  render() {
    return(
      <div className="product">
        <h1>{this.name}</h1>
      </div>
    )
  };
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    const weight = props[propName];
    if (props[propName] < 80 || props[propName] > 300  ) {
      return new Error("Weight needs to be a number between 80 and 300.");
    } else if (typeof weight != 'number' || weight == undefined || isNaN(weight) ) {
      return new Error("Needs to be a number.");
    }
  }
}

Product.defaultProps = {
  hasWatermark: false
}
