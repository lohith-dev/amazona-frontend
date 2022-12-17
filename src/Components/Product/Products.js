import React from 'react'
import {useSelector} from 'react-redux'
import { Helmet } from 'react-helmet-async';
import Product from './Product';
import Loadingbox from '../Loading/Loadingbox'


function Products() {
     const prods=useSelector(state=>state.Products.products)
     console.log(prods);
  return (
    <div>
      <Helmet>
        <title>Amazona</title>
      </Helmet>
        <main class="container p-3">
        <h1>Featured products</h1>
          {
              prods.length==0 ?
              (
                <div className='loadinganim'>
                  <Loadingbox/>
                </div>
              ):(
                <section class="p-4 w-100">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                  {
                    prods.map((product)=>(
                        <Product key={product.slug} product={product}/>
                      ))
                    }
                </div>
              </section>
              )
          }
    </main>
    </div>
  )
}

export default Products