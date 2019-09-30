import React from "react"

class Total extends React.Component {
    subTotal = () => {
      let tempSubTotal = 0
      this.props.items.map((userShoppingCart) => {
        if(userShoppingCart.length > 1){
          tempSubTotal = this.props.price*this.props.quantity
        }
        else {
          tempSubTotal += this.props.price
        }
        return null;
      })
      return tempSubTotal
    }
   
    render() {
      const subTotal = this.subTotal();
      return (
        <div className="shoppingCart">
          <h4>Current SubTotal: ${subTotal}.00</h4>
          <ProductDisplay subTotal={subTotal} items={this.props.items} price={this.props.price} />
        </div>
      )
    }
  }

  const ProductDisplay = (props) => {
    return(
      <div className="cartList">
        {props.items.map((currItem, index)=>
          <Display key={index} index={index} item={currItem} price={props.price} />
          )}
        <button className="shipmentButton"> onClick={(e) => props.shipment(e, props.subTotal)}>Save And Continue</button>
      </div>
    )
  }  

  class Display extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        price: 0,
        total: 0
      }
    }
    componentDidMount = async () => {
      let tempPrice;
      if(this.props.item.quantity === 1){
        tempPrice = this.props.price
      }
      this.setState({price: tempPrice, total: tempPrice*this.props.item.quantity})
    }
  
    render(){
      return(
        
           <div key={this.props.index} className="CartItem">
          <figure>
            <img src={this.props.item.thumb} alt={this.props.item.name} id={this.props.index} />
            
          </figure>
  
          <form>
            <table className="ContentInformation">
              <tbody>
                <tr>
                  <td colSpan={2}>
                    <table>
                      <tbody>
                        <tr>
                          <td><b>Quantity:</b></td>
                          <td>quantity={this.state.quantity}</td>
                        </tr>
                        <tr>
                          <td><b>Price Per:</b></td>
                          <td>${this.state.price}.00</td>
                        </tr>
                        <tr>
                          <td><b>Total:</b></td>
                          <td>${this.state.total}.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>    
          </form>
        </div>
      )
    }
  }

export default Total;