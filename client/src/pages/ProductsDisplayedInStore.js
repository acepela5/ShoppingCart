import React, { Component } from "react";
import API from "../utils/API";
import SaveButton from "../components/SaveButton";

import items from "../components/ProductsToBuy";
import donation from "../components/Donation";

class ProductsDisplayedInStore extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items,
      usershoppingcart: [],
      sizeValue: "",
      // size: props.size,
      donation,
      donationAmount: "",
      quantityValue: "",
    }
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleDonationAmount = this.handleDonationAmount.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  };

  componentDidMount() {
    //  console.log(this.state.size)
  }

  handleSizeChange = (e) => {
    console.log("EEEEEE")
    console.log(e.target.value)
    this.setState({
      sizeValue: e.target.value,
    });
  }

  handleDonationAmount = (e) => {
    console.log("AAAAAAAA")
    console.log(e.target.value)
    this.setState({
      donationAmount: e.target.value,
    });
  }

  handleQuantityChange = (e) => {
    console.log("IIIIIIIII")
    console.log(e.target.value)
    this.setState({
      quantityValue: e.target.value,
    });
  }

  handleAddItemToCart = item => {
    console.log(item, 'this is an item===== ')
    console.log(this.state.usershoppingcart, "current state of shopping cart")

    const newUserShoppingCart = this.state.usershoppingcart
    newUserShoppingCart.push(item)
    console.log(newUserShoppingCart, 'this is the shop cart')

    this.setState({
      usershoppingcart: newUserShoppingCart
    })

    let size = this.state.sizeValue;
    newUserShoppingCart.push(size);
    console.log(size, "this is the size going through*******")

    let userDonation = this.state.donationAmount
    newUserShoppingCart.push(userDonation);
    console.log(userDonation, "this is user donation $$$$$$$$")
    console.log(newUserShoppingCart.price, "$$$$$$$$$$$ donation $$$$$$$$")

    let newquantity = this.state.quantityValue
    newUserShoppingCart.push(newquantity);
    console.log(newquantity, "how many ---------------")

    console.log("STATE")
    console.log(this.state.usershoppingcart)

    API.saveItemToCart({
      item: this.state.usershoppingcart[0].item,
      img: this.state.usershoppingcart[0].img,
      description: this.state.usershoppingcart[0].description,
      price: this.state.usershoppingcart[0].price,
      size: this.state.usershoppingcart[1],
      quantity: this.state.usershoppingcart[3],
      userDonation: this.state.usershoppingcart[2]
    }).then(result => {
       console.log(result.data, "--in save item to cart")
       this.setState = {
        // usershoppingcart: [],
        sizeValue: "",
        donationAmount: "",
        quantityValue: "",
      }

      // }).then(console.log(this.saveItemToCart, "IN SAVE ITEM TO CART ----------"))
      // .then(() => API.getUserShoppingCart())

     });
    }

  render() {
    return (
      <div className="ProductDisplay">
        <ul>
          {this.state.items.map(items => {
            return (
              <li>
                <SaveButton onClick={() => {
                  console.log('items', items)
                  console.log('items-state', this.state)
                  this.handleAddItemToCart(items);
                  // alert("Added to cart!");
                  console.log(this.handleAddItemToCart, "this is in the save button click");
                }
                }>
                </SaveButton>
                <h1>{items.item}</h1>
                <img alt={items.item} src={items.img} />
                <p>${items.price}.00</p>
                <p>{items.description}</p>
                <select multiple={false} name="sizes"
                  onChange={this.handleSizeChange}
                  sizeValue={this.state.sizeValue}>
                  <option defaultValue="">Size</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
                <select multiple={false} name="quantity"
                  onChange={this.handleQuantityChange}
                  quantityValue={this.state.quantityValue}>
                  <option defaultValue="">Quantity</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </li>
            )
          })}
          {this.state.donation.map(donation => {
            return (
              <li>
                <SaveButton onClick={() => {

                  console.log('donation', donation)
                  console.log('items-state', this.state)
                  this.handleAddItemToCart(donation);
                  // alert("Added to cart!");
                  console.log(this.handleAddItemToCart, "this is in the save button click");

                }
                }>
                </SaveButton>
                <h1>{donation.item}</h1>
                <img alt={donation.item} src={donation.img} />
                <p>{donation.description}</p>
                <p>{donation.size}</p>
                <textarea onChange={this.handleDonationAmount}
                  donationAmount={this.state.donationAmount}
                  rows="1" cols="5" placeholder="$$$" className="userDonation"></textarea>
              </li>
            )
          })}
        </ul>
      </div>
     
    );
  }

}

export default ProductsDisplayedInStore;
