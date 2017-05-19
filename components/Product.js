import React from 'react';

export default class Product extends React.Component {
    render() {
        return (
            <div className="Product">
                <h4>{this.props.name}</h4>
                {this.props.producer ? <p>{this.props.producer}</p> : null}
                <p>{this.props.hasWatermark ? "Yes" : "No"}</p>
                <p>{this.props.color}</p>
                <p>{this.props.weight}</p>
            </div>
        );   
    }
};

Product.defaultProps = {
    hasWatermark: false
};

Product.propTypes = {
    name: React.PropTypes.string.isRequired,
    producer: React.PropTypes.string,
    hasWatermark: React.PropTypes.bool,
    color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
    weight: (props, propName) => {
    const weight = props[propName];
    const isValidWeight = weight > 80 && weight < 300;

    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }

    

    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  },
};