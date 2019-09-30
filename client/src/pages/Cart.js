import React, { Component } from "react";
import API from "../utils/API";
// import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
// import Total from "../components/Total";

class Cart extends Component {
  state = {
    usershoppingcart: [],
    price: 0,
    total: 0
  };

  componentDidMount() {
    API.getUserShoppingCart()
      .then(res => {
        this.setState({ usershoppingcart: res.data })
      })
      .catch(err => console.log(err));
  };

  postUserShoppingCart = () => {
    console.log("inside post++++++++")
    API.getUserShoppingCart(this.props.match.params.id)
      .then(res => this.setState({ usershoppingcart: res.data }))
      .catch(err => console.log(err));
  };

  handleItemDelete = id => {
    API.deleteItem(id).then(res => this.postUserShoppingCart());
  };

  subTotal = (price, quantity) => {
    let tempSubTotal = 0
    console.log("WE ARE IN THE CART SUBTOTAL")
    console.log(this.state.usershoppingcart)
    // this.state.usershoppingcart.map(elem =>  {

    //   tempSubTotal = elem.price*elem.quantity
    // })
    return price * quantity
  }


  total = () => {
    let tempTotal = 0
    this.state.usershoppingcart.map(elem => {
      tempTotal = tempTotal + ( elem.price * elem.quantity)
    })
    console.log("TOTAL", tempTotal)
    return tempTotal
    // this.setState({
    //   total: tempTotal

    // })
  }

  render() {
    const total = this.total();
    console.log("indisde the render:", this.state.usershoppingcart)
    return (
      <div className="UserShoppingCart">
        <ul>
          {this.state.usershoppingcart.map(usershoppingcart =>
            <li>
              <h1>{usershoppingcart.item}</h1>
              <img alt={usershoppingcart.item} src={usershoppingcart.img} />
              <p>{usershoppingcart.description}</p>
              <p>${usershoppingcart.price}.00</p>
              <p>{usershoppingcart.size}</p>
              <p>{usershoppingcart.quantity}</p>
              {/* total price to display */}
              <DeleteBtn onClick={() => this.handleItemDelete(usershoppingcart._id)} />
              {/* <h4>Current SubTotal: ${subTotal}.00</h4> */}
              <h4>Current SubTotal: ${usershoppingcart.price * usershoppingcart.quantity}.00</h4>

            </li>
          )}
        </ul>
        <b>Total:</b><br />${total}.00
      </div>

      // <div className='UserShoppingCart'>
      //   {this.state.usershoppingcart.length ? (
      //     <List>
      //       {this.state.usershoppingcart.map(usershoppingcart => (
      //         <ListItem 
      //           item={usershoppingcart.item}
      //           price={usershoppingcart.price}
      //           description={usershoppingcart.description}
      //           size={usershoppingcart.size}
      //           quantity={usershoppingcart.quantity}
      //           img={usershoppingcart.img}>

      //           <DeleteBtn onClick={() => this.handleItemDelete(usershoppingcart._id)}/>
      //         </ListItem>
      //       ))}
      //       {/* <Total /> */}
      //     </List>
      //     //Total cost of items in cart


      //        ) : (
      //           <h3>No Results to Display</h3>
      //             )}
      // </div>
    );
  }

}

export default Cart;
