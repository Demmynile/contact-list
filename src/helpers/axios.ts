import axios from 'axios'
import {baseUrlType , headersType } from '../typings'

const baseURL : baseUrlType  = process.env.REACT_APP_BACKEND_URL

console.log("BASEURL" , baseURL)

let headers : headersType  = {}

if(localStorage.token){
	headers.Authorization  = `Bearer ${localStorage.token}`
}

const axiosInstance = axios.create({
	baseURL : baseURL,
	headers
 })


 export default axiosInstance