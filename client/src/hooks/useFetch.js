import {useState, useEffect} from 'react';
import axios from 'axios';

export default (url) => {
   // const[isloading, setIsLoading] = useState(false);
   const [response, setResponse] = useState(null)
   const [error, setError] = useState(null)
   const [options, setOptions] = useState({})
   const [isloading, setIsloading] = useState(false)

   const doFetch = (options = {}) => {
      setOptions(options)
      // setIsloading(true)
   }

      useEffect(() => {
         // if(!isloading){
         //    return
         // }
         axios(url, options)
            .then((res) => {
               console.log(url, res)
               // setIsLoading(false)
               setResponse(res.data)
            })
            .catch((error) => {
               console.log('error', error)
               // setIsLoading(false)
               setError(error.response.data)
            })
      },[isloading])
   return[{isloading, response, error}, doFetch]
}