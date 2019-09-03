// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component{
  render(){

    return(
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

    Product.propTypes = {
      name: PropTypes.string.isRequired,
      producer: PropTypes.string,
      hasWatermark: PropTypes.bool,
      color:  PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
      weight: function(props,propName)  {
        const weight = props[propName];
        const msg = weight >80 && weight <300
        if (weight === undefined)
        {
          return 'The `weight` prop is not a number.';
        }
        if (!msg)
        {
          return 'The `weight` prop validator does not check for the weight ranging between 80 and 300.'
        }
        }
}
