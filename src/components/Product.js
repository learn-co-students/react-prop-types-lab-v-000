import React from 'react'

export default class Product extends React.Component {
	render() {
	    return (
	      <div className="product">
	        <ul>
	          <li>Name: {this.props.name}</li>
	          <li>Producer: {this.props.producer}</li>
	          <li>Has Watermark?: {this.props.hasWatermark ? 'Yes' : 'No'}</li>
	          <li>Color: {this.props.color}</li>
	          <li>Weight: {this.props.weight}</li>
	        </ul>
	      </div>
	    );
  	}
}
