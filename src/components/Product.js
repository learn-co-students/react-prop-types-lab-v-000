import React from 'react'
import PropTypes from 'prop-types'
import 'core-js/es6/map'
import 'core-js/es6/set'

class Product extends React.Component {
  
  render (){
    console.log("MINE: ", this.props)
    return (
      <div>
        <h1>{this.props.name}</h1>
        <ul>
          <li>Producer: {this.props.producer}</li>
          <li>{this.props.producer ? "Has watermark" : "No watermark"}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight} lbs</li>
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
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props,propName) =>{
    if (props.weight === undefined){
      return new Error('Weight is required')
    }
    if (isNaN(props.weight)) {
      return new Error ('The weight must be a number')
    }     
    if (props.weight > 300 || props.weight < 80) {
      return new Error ('Weight must be between 80 and 300')
    }      
  }
}

export default Product

// import React from 'react';
// import PropTypes from 'prop-types';

// class Product extends React.Component {

//   render() {
//     return (
//       <div>Product</div>
//     )
//   }
// }

// Product.defaultProps = {
//   hasWatermark: false
// }

// Product.propTypes = {
//   name: PropTypes.string.isRequired,
//   producer: PropTypes.string,
//   hasWatermark: PropTypes.bool,
//   color: PropTypes.oneOf([
//     'white', 
//     'eggshell-white', 
//     'salmon'
//   ]).isRequired,
//   weight: (props, propName) => {
//     const weight = props[propName];

//     if (weight === undefined) {
//       return new Error('The `weight` prop is required.');
//     }

//     if (isNaN(weight)) {
//       return new Error('The `weight` prop is not a number.');
//     }

//     const isValidWeight = weight > 80 && weight < 300;

//     if (!isValidWeight) {
//       return new Error('The `weight` prop should range between 80 and 300.');
//     }
//   },
// }

// export default Product;