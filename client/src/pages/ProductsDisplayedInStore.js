import React, { Component } from "react";
import API from "../utils/API";
// import {List, ListItem} from "../components/List";
import SaveButton from "../components/SaveButton";

import items from "../components/ProductsToBuy";
import donation from "../components/Donation";

class ProductsDisplayedInStore extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items,
      usershoppingcart: [],
      // size: this.props.size,
      sizeValue: "",
      size: props.size,
      donation,
      donationAmount: "",
      quantityValue: "",
      test: false
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
    // console.log(e.currentTarget.value)
    console.log(e.target.value)
    this.setState({
      sizeValue: e.target.value,

    });
  }

  handleDonationAmount = (e) => {
    console.log("AAAAAAAA")
    // console.log(e.currentTarget.value)
    console.log(e.target.value)
    this.setState({
      donationAmount: e.target.value,

    });
  }

  handleQuantityChange = (e) => {
    console.log("IIIIIIIII")
    // console.log(e.currentTarget.value)
    console.log(e.target.value)
    this.setState({
      quantityValue: e.target.value,

    });
  }

  handleAddItemToCart = item => {
    console.log(item, 'this is an item===== ')
    console.log(this.state.usershoppingcart, "current state of shopping cart")

    const newUserShoppingCart = this.state.usershoppingcart
    // .find(usershoppingcart => usershoppingcart.id ===item.id)
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
    // .then(this.setState({
    //   this.state.usershoppingcart.price: userDonation  
    // })
    // )

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
      quantity: this.state.usershoppingcart[3]
    }).then(result =>{
       console.log(result.data, "--in save item to cart")
       this.setState = {
       // items,
        usershoppingcart: [],
        // size: this.props.size,
        sizeValue: "",
        // size: props.size,
       // donation,
        donationAmount: "",
        quantityValue: "",
      //  test: true
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
                  <option defaultValue="">1</option>
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

                  console.log('items', items)
                  console.log('items-state', this.state)
                  this.handleAddItemToCart(items);
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
      // <div className="ProductDisplay">     
      //   <List>
      //    {this.state.items.map(items => {
      //       return (

      //           <li>
      //             <h1>ITEM: {items.item} </h1>
      //           </li>

      //         <ListItem 

      //           item={items.item}
      //           price={items.price}
      //           description={items.description}
      //           size={items.size}
      //           img={items.img}>

      //           <SaveButton onClick={()=>{

      //             console.log('items', items)
      //             console.log('items-state', this.state)
      //              this.handleAddItemToCart(items);
      //               // alert("Added to cart!");
      //               console.log(this.handleAddItemToCart, "this is in the save button click");

      //           }
      //           }>
      //           </SaveButton>
      //          </ListItem>
      //         );
      //       })}
      //   </List>     
      // </div>
    );
  }

}

export default ProductsDisplayedInStore;
