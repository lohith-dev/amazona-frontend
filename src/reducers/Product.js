import { createSlice } from '@reduxjs/toolkit'
import * as api from '../api/index.js'


export const getPosts=()=>async (dispatch)=>{

    try{
        console.log("fffffffffffff");
        const {data}= await api.fetchPosts();
        dispatch(getredPosts(data));
    }catch (err){

    }

}

export const getProduct=(slug)=>async (dispatch)=>{

  try{
      dispatch(ApiCallstart());
      const {data}= await api.fetchProduct(slug);
      dispatch(getredProduct(data));
  }catch (err){
   
    dispatch(ApiFailure(err.message));
  }

}

export const ProductsSlice = createSlice({
  name: 'Products',
  initialState:{
    loader:null,
    products:[],
    singleproduct:[],
    err:null,
  },
  reducers: {

    ApiCallstart:state=>{
      state.loader=true;
    },
    getredPosts: (state,action) => {
      
      state.products = action.payload;
    },
    getredProduct: (state,action) => {
      state.loader=false;
      state.singleproduct = action.payload;
    },
    ApiFailure:(state,action)=>{
      state.loader=false;
      state.err=action.payload;
    },
  },
})

// Action creators are generated for each cas,e reducer function
export const { getredPosts ,getredProduct,ApiCallstart,ApiFailure} = ProductsSlice.actions

export default ProductsSlice.reducer