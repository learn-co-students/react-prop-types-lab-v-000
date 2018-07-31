import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class Product extends Component{
  render(){
    return(
      <div className="products">
      <ul>
      <li>{this.props.name}</li>
      <li>{this.props.producer}</li>
      <li>{this.props.hasWatermark ? true : false}</li>
      <li>{this.props.color}</li>
      <li>{this.props.weight}</li>
      </ul>
      </div>
    )
  }
}

 function weightChecker(props, propName){
   let weight = props[propName]
   if(weight === NaN){
     return false
   }
   if (weight < 80 || weight > 300){
     return false
   }
 }

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    "white",
    "eggshell-white",
    "salmon"
  ]).isRequired,
  weight: (props, propName) => {
    let weight = props[propName]
      if(weight === undefined){
        return new Error("must be a number")
      }
      if (isNaN(weight)){
        return new Error("must be between 80 and 300 pounds")
      }
      if(weight < 80 || weight > 300){
        return new Error("weight must be defined")
      }
    }
  }
