import axios from 'axios';

const url="http://localhost:8000/api";

export const fetchPosts =()=> axios.get(`${url}/products`);

export const fetchProduct =(slug)=> axios.get(`${url}/products/slug/${slug}`);