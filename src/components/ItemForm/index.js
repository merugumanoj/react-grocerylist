import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  width: 700px;
  div {
    width: 20%;
    display: flex;
    flex-direction: column;
    input {
      padding: 5px;
      font-size: 15px;
    }
  }
  .name-input {
    width: 50%;
  }
  .btn-div {
    margin-top: 18px;
    display: block;
    width: 10%;
    button {
      height: 30px;
    }
  }
`

class ItemForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: 0,
      amount: 0
    }
  }

  handleChange = (e) => {
    console.log(e.target);
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.pushItems(this.state);
  }

  render() {
    const {name, quantity, amount } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <div className="name-input">
          <label htmlFor="name">Enter Name:</label>
          <input name="name" placeholder="Enter Item Name" type="text" value={name} onChange={this.handleChange}/>
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input name="quantity" placeholder="Quantity" type="number" value={quantity} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input name="amount" placeholder="Amount" type="number" value={amount} onChange={this.handleChange}/>
        </div>
        <div className="btn-div">
          <button type="submit">Add Item</button>
        </div>
      </Form>
    )
  }
}

export default ItemForm;
