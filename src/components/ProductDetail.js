import React from 'react';
import products from '../data/products.json';

function ProductDetail(props) {
    const productId = props.match.params.id;
    const product = products.find(p => p.id === productId);
    if (!product) {
        return <div>Product not found</div>;
      }
    return (
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
      </div>
    );
  }
  
  export default ProductDetail;
