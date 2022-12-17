import React from 'react'
import { useNavigate,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from './Rating';

function Product({product}) {
  return (
    <div  class="col ">
    <div class="card h-100">
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} class="card-img-top" alt={product.name} />
      </Link>
      <div class="card-body">
       <Link to={`/product/${product.slug}`}>
          <h5 class="card-title">{product.name}</h5>
          </Link>
          <Rating rating={product.rating} numReviews={product.numReviews}/>
          <p class="card-text"><strong>${product.price}</strong></p>
          <button className='btn btn-primary'>Add to cart</button>
      </div>
    </div>
</div>

  )
}

export default Product