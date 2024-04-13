import React from 'react'
import '../styles/Main.css'
import {Card,Button} from 'react-bootstrap';

import {phonesData} from './ProductData.js'
import { useState } from 'react';


export const Main = () => {
  const [items,setItems]=useState(phonesData);
        const decQty=(id)=>{
            const newItem = items.map((item)=>
            item.id === id && item.Qty>1 ? {...item, Qty: item.Qty-1 }  : item

        );
    setItems(newItem);
    
    };
    const incQty=(id)=>{
        const newItem = items.map((item)=>
        item.id===id?{...item,Qty:item.Qty+1}:item

    );
setItems(newItem);

};
    return (
    <div>
    <h1 className="bg-info text-white">Products</h1>
    {items.map((item)=>(
        <div  className="d-inline-flex" key={item.id}>
        <Card className="shadow p-3 m-2 bg-body rounded"style={{ width: '240px' }}>
    <Card.Img style={{ height: '250px' }}variant="top" className="p-2"src={require(`../images/${item.img}.jpg`)} />
    <Card.Body>
      <Card.Title className='text-primary'>{item.Name}</Card.Title>
      <h3>Price:{item.Price}</h3>
      <div>
      <p>Qty:
      <Button onClick={()=>decQty(item.id)} className="m-1">-</Button>{item.Qty}<Button onClick={()=>incQty(item.id)} className="m-1">+</Button></p>
      </div>
      <Button variant="primary">Add to Cart</Button>
    </Card.Body>
  </Card>
    </div>
    ))}
    </div>
  
      );
};
