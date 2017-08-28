import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
    render() {
        return ( 
            <div className="product">
                <h1>Name: {this.props.name}</h1>
                <p>Producer: {this.props.producer}</p>
                <p>{this.props.hasWatermark}</p>
                <p>Color: {this.props.color}</p>
                <p>weight: {this.props.weight}</p>
            </div>
        )
    }
}

Product.defaultProps = {
  hasWatermark: false
};

var weightRange = [];
for (let i = 80; i <= 300; i++) {
    weightRange.push(i)
}

var colors = ['white', 'eggshell-white', 'salmon'];

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(colors).isRequired,
  weight: PropTypes.oneOf(weightRange).isRequired
};

