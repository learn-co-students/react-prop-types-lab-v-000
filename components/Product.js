class Product extends React.Componenet {
  render(){
    return (
      <div className="product">
        <ul>
          <li>{this.props.name} </li>
          <li>{this.props.producer} </li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    );
  }
}

module.exports Product

