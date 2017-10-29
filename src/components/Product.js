// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';
 
export default class Product extends React.Component{
   render(){
       return(
           <div>
            <p>{this.props.name}</p>
            <p>{this.props.producer}</p>
            <p>{this.props.hasWatermark}</p>
            <p>{this.props.color}</p>
            <p>{this.props.weight}</p>
           </div>
       )
   }
}

Product.defaultProps = {
    hasWatermark: false
}
function checkRange(props, propName,componentName){
   if(props[propName]){
    let value = props[propName]
        if(!isNan(value)){
            return new Error("not an integer")
        }
        else if(value<=80 || value>=300){
          return  new Error("value is not in range")
        }
        else{
            return null
        }
   }
    else{
        return new Error("value must exist")
    }
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
    weight: (props, propName) => {
    let value = props[propName]
        if(value === undefined ){
            return new Error("value must exist")
        }
        if(typeof value !== "number"){
            return new Error("not an integer")
        }
        if(!(value>80 && value<300)){
          return new Error("value is not in range")
        }
    }


}