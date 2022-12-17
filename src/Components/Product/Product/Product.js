import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getProduct} from '../../../reducers/Product'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import Rating from '../Rating'
import { Helmet } from 'react-helmet-async';
import Loadingbox from '../../Loading/Loadingbox'
function Product() {
  const [loading, setLoading] = useState(true)
    const params=useParams();
    const {slug}=params;
    const dispatch = useDispatch();
    const prods=useSelector(state=>state.Products.singleproduct );
    const err=useSelector(state=>state.Products.err);

    useEffect(()=>{
      dispatch(getProduct(slug));
  
     },[slug])

   
    
  return (
    
    err ? (
      <div className='container'>
        <div class="alert alert-danger" role="alert">
         {err}
      </div>
      </div>
      ):prods.length==0 ?
       (
        <div className='loadinganim'>
          <Loadingbox/>
        </div>
      ):
      (<div class="container">
        <div class="row">
            <div class="col-md-6">
              <img src={prods.image} className="img-large" alt={prods.name} /> 
            </div>
        <div class="col-md-3">
              <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <Helmet>
                      <title>{prods.name}</title>
                      </Helmet>
                      <h1>{prods.name}</h1>
                      </li>
                    <li class="list-group-item">{<Rating rating={prods.rating} numReviews={prods.numReviews}/>}</li>
                    <li class="list-group-item">Price : ${prods.price}</li>
                    <li class="list-group-item">Description:
                    <p>{prods.description}</p></li>
              </ul>
          </div>
          <div class="col-md-3">
            <div class="card">
              <ul class="list-group list-group-flush">
             
                <li class="list-group-item">
                    <div className="row">
                      <div className="col">Price:</div>
                      <div className="col"> $ {prods.price}</div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div className='row'>
                    <div className="col">Status:</div>
                    <div className="col">{prods.countInStock >0 ? <span class="badge badge-success">In Stock</span>:<span class="badge badge-danger">Unavailable</span>}</div>
                    </div>
                  </li>
                 
                  {prods.countInStock >0 && (
                     <li class="list-group-item">
                        <div className='d-grid'>
                          <button className='btn btn-primary'>Add to Cart</button>
                        </div>
                      </li>
                  )}
                 
              </ul>
            </div>
          </div>
      </div>
    </div>
    )
  )
}

export default Product;