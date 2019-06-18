import React, { Component } from 'react';
import ItemList from '../components/ItemList';
import styled from 'styled-components';
import ItemForm from '../components/ItemForm';
import Loading from '../components/Loading';
import axios from 'axios';

  
const Container = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  width: 750px;
  align-items: center;
  table {
    width: 700px;
    /* border: 1px solid black; */
    td {
      border: 1px solid black;
    }
  }
`

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loaded: false
    }
  }

  handleItemPush = (item) => {
    console.log(item);
    this.setState({
      items: [
        ...this.state.items,
        item
      ]
    })
  }

  render() {
    const {items,loaded} = this.state;
    return (
      <Container>
        <h1>Grocery List</h1>
        {!loaded ? <Loading/>:
        <div>
           <ItemForm pushItems={this.handleItemPush} />
           <ItemList items={items}/>
        </div>}
      </Container>
    )
  }
  componentDidMount(){
    axios.get('http://localhost:3003/api/item-list')
    
              .then(({data}) => {
              console.log( {data} );
              this.setState({
              items: data,
              loaded: true
             });
  })
  .catch(function (error) {
    console.log(error);
  });

  }
}


export default Home;