// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export class Product extends React.Component {
  render(){
      return(
          <div>
             <h1>Product name: {this.props.name}</h1>
             <p>Producer: {this.props.producer}</p>
             <p>This item has watermark: {this.props.hasWatermark ? "Yes": "No"}</p>
             <p>Color: {this.props.color}</p>
             <p>Weight: {this.props.weight}</p>
          </div>
      );
  }
};

Product.defaultProps = {
  hasWatermark: false
};
// function createChainableTypeChecker(validate){
//     function checkType(isRequired, props, propName, componentName, location) {
//         componentName = componentName || ANONYMOUS;
//         if(props[propName] == null){
//             var locationName = ReactPropTypeLocationNames[location];
//             if(isRequired){
//                 return new Error(
//                     ("Required " + locationName + " `" + propName + "` was not specified in ") +
//                     ("`" + componentName + "`.")
//                 );
//             }
//             return null;
//         }else {
//             return validate(props, propName, componentName, location)
//         }
//     }

//     var chainCheckType = checkType.bind(null, false);
//     chainCheckType.isRequired = checkType.bind(null, true);

//     return chainCheckType;
// }
// function checkWeight(props, propName, componentName){
//     if(props[propName] < 80 || props[propName] > 300){
//        return new Error(
//            'Invalid prop `' + propName  + '` supplied to' +
//            ' `' + componentName + '`. Validation failed.'  
//        );
//     }
//  }

// let weightRangeChecker = createChainableTypeChecker(checkWeight)
// weightRangeChecker.isRequired
Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,  
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: (props, propName, componentName) => {
    let value = props[propName];

    if(props[propName] == null){
        return new Error(
            'The `' + propName + '` is requierd in' +
            ' `' + componentName + '` Validation faild.' 
        );
    }else if(props[propName] < 80 || props[propName] > 300){
        return new Error(
            'Invalid prop `' + propName  + '` supplied to' +
            ' `' + componentName + '`. Validation failed.'  
        );
    }else if(typeof value !== "number"){
        return new Error(
            'Invalid prop `' + propName  + '` supplied to' +
            ' `' + componentName + '`. `' + 
            propName + '`needs to be a number. ' +
            'Validation failed.'  
        );
    }else{
        return null;
    }
  }
};
export default Product;