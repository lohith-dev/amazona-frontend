import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import {getPosts} from '../../reducers/Product'
import Products from '../Product/Products';

function Home() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
   },[])

  return (
    <div>
      <Products/>
    </div>
  )
}

export default Home