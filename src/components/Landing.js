import React,{useState,useEffect} from 'react';

//Api
import {getCoin} from "../services/api";

const Landing = () => {

     const [state, setState] = useState([]);

     useEffect(() => {

          const fetchApi = async () => {
               const data = await getCoin();
               console.log(data)
               setState(data)
          }

          fetchApi()
         
     }, []);

     return (

          <div>
               <ul>
                   {state.map((item)=>{
                         <li key={item.id}>{item.id}</li>
                   })} 
               </ul>
               
          </div>

     );
}

export default Landing;
