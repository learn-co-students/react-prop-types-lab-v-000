import React from 'react';
import PropTypes from 'prop-types';


export default class Product extends React.Component {
  render() {
    return (
      <div className="ship">
          <p>{this.props.name} </p>
          <p>{this.props.producer}</p>
          <p>{this.props.hasWatermark}</p>
          {/*<p>{this.props.color.join(', ')}</p>*/}
          <p>{this.props.weight}</p>

      </div>
    );
  }
}
//default
Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
    producer: PropTypes.string,
    
    hasWatermark: PropTypes.bool,
    // color: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    weight: isWeight

};

function isWeight(props, weight, components){
    if (80 > weight < 300 ){
        return 'must be between 80 & 300';
    }
}


