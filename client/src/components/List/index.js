import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }){
  return (
  <div className="list-overflow-container">
  <ul className="list-group">{children}</ul>
  </div>
  );
}

export function ListItem(props) {
  // this.state = {
  //   value: 'XS'
  // };

  // handleChange(e) {
  //   let {name, value} = e.target;
  //   this.setState({
  //     [name]: value,
  //   });
  //   this.handleChange = this.handleChange.bind(this)
  //   };

  return( 
    <li className="list-group-item">{props.children}
      <h1>{props.item}</h1>
      <img alt={props.item} src={props.img}/>
      <p>{props.description}</p>
      <p>${props.price}.00</p>
      
      <select>
      {/* <select  onChange={this._handleChange}
      value={this.state.value}
      defaultValue={this.state.value}> */}
        <option defaultValue="">Size</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
  {/* <div>
    <input type="range" min="1" max="10" step="1">
      <label for="quantity">Quantity</label>
    </input>
  </div> */}
  </li>
  )
}


