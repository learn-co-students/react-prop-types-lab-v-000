import React from 'react'
import PropTypes from 'prop-types'


class Product extends React.Component {
  render () {
   return (
    <h1>  {this.props.name}</h1>
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
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: function(props, propName, componentName){

    if(props[propName] == undefined){
      return new Error("enter a number")
    }


    if(isNaN(props[propName])){
      return new Error("Please input a number")
    }
    if(props[propName] < 80 || props[propName] > 300){
      return new Error( "invaild wieght")
    }

  }
}




export default Product
//
// Order.propTypes = {
//   cone: PropTypes.bool,
//   size: PropTypes.string,
//   scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
//   orderInfo: PropTypes.shape({
//     customerName: PropTypes.string.isRequired,
//     orderedAt: PropTypes.number.isRequired // We're using UNIX timestamps here
//   }).isRequired
// };
