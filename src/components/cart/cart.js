import React from "react";
import { Button, Input } from "antd";
import "../../styles/cart.css";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "Strawberry Cake",
          flavor: "Strawberry",
          desc: "Sweeten Strawberries",
          price: "1000",
          quantity: 1,
        },

        {
          name: "Strawberry Cake",
          flavor: "Strawberry",
          desc: "Sweeten Strawberries",
          price: "1000",
          quantity: 1,
        },

        {
          name: "Strawberry Cake",
          flavor: "Strawberry",
          desc: "Sweeten Strawberries",
          price: "1000",
          quantity: 1,
        },
      ],
      cartPrice: 0,
      deliveryFee: 40,
      totalPrice: 0
    };
  }

  componentDidMount() {
    this.setCartPrice();
  }

  setCartPrice = () => {
    let {cartPrice, deliveryFee, items, totalPrice} = this.state;
    cartPrice = 0, totalPrice = 0;
    items.forEach((value, index) => {
      cartPrice+= parseInt(value.price) * value.quantity
    });
    totalPrice = cartPrice + deliveryFee;
    this.setState({cartPrice, totalPrice});
  }

  handleOnClick = (i, type) => {
    const { items } = this.state;

    if (type === "-" && items[i].quantity > 1)
      items[i].quantity = items[i].quantity - 1;
    else if (type === "+") items[i].quantity = items[i].quantity + 1;
    else if (type === "remove") items.splice(i, 1);

    this.setState({ items }, () => {
      this.setCartPrice();
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div className="cart-wrapper">
        <div className="item-wrapper">
          <div className="cart-item-header">
            <span>My Cart ({items.length})</span>
          </div>
          <div className="cart-item-details ">
            {items.map((item, index) => (
              <div className="single-cart-item">
                <div className="item-body">
                  <div className="df fdc p-10">
                    <img
                      alt="item-img"
                      src="https://rukminim1.flixcart.com/image/224/224/induction-cook-top/5/c/k/pigeon-favourite-ic-1800-w-favourite-ic-1800-w-original-imaenreqhefzd63h.jpeg?q=90"
                    />
                    <div className="item-quantity-wrapper df">
                      <Button
                        className="mr-5"
                        shape="circle"
                        type="primary"
                        onClick={() => this.handleOnClick(index, "-")}
                      >
                        -
                      </Button>
                      <p>{item.quantity}</p>
                      <Button
                        className="ml-5"
                        shape="circle"
                        type="primary"
                        onClick={() => this.handleOnClick(index, "+")}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <div className="p-10">
                    <p className="sHeading">{item.name}</p>
                    <p>{item.flavor}</p>
                    <p>{item.desc}</p>
                    <p className="price-text">{item.price}</p>
                    <div>
                      <Button
                        onClick={() => this.handleOnClick(index, "remove")}
                      >
                        Remove
                      </Button>
                      <Button>Save for Later</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="price-wrapper m-10 p-10 df fdc">
          <div>
            <span className='sHeading'>Price Details</span>
            <hr/>
          </div>
          <div className='df fdc f1 jcse'>
            <div className='df jcsb'>
              <span>Price</span>
              <span>{this.state.cartPrice}</span>
            </div>
            <div className='df jcsb'>
              <span>Delivery Fee</span>
              <span>{this.state.deliveryFee}</span>
            </div>
            <div className='df jcsb'>
              <span>Total amount</span>
              <span>{this.state.totalPrice}</span>
            </div>
          </div>
          <div>
            <Button type='primary' style={{width: '100%'}}>BUY NOW</Button>
          </div>
        </div>
      </div>
    );
  }
}
