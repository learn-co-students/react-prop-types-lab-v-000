
import React from 'react';
import PropTypes from 'prop-types';


// Code Product Component Here
export default class Product extends React.Component {
    render(){
        return(
            <div></div>
        )
    }
}

Product.defaultProps = {
    hasWatermark: false,
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
    weight: function(props, propName, componentName){


        // WHY DOES THIS CODE WORK when mine didn't???
            const weight = props[propName];
            if (props[propName] === undefined) {
              return new Error('Weight required');
            } else if (isNaN( props[propName])) {
              return new Error('Weight must be a number');
            } else if (props[propName] < 80 || props[propName] > 300) {
              return new Error('Weight should be between 80-300');
            }
    }
}