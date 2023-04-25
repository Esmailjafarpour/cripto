import React,{useState,useEffect} from 'react';

//Api
import {getCoin} from "../services/api";

//component
import Loader from '../components/Loader';
import Coin from '../components/Coin'

const Landing = () => {

     const [coins, setCoins] = useState([]);
     const [search, setSearch] = useState("");


     useEffect(() => {

          const fetchApi = async () => {
               const data = await getCoin();
               setCoins(data)
          }

          fetchApi()
         
     }, []);

     const searchHandler = (event) => {
          setSearch(event.target.value)
     }

     const searchCoins = coins.filter( coin => coin.name.toLowerCase().includes(search.toLowerCase()))

     return (

          <>
               <input type="text" placeholder="Search" value={search} onChange={searchHandler}/>
               
               {coins.length ? 
                    <div>
                         {searchCoins.map(coin =>(
                              <Coin 
                                   key={coin.id}
                                   symbol={coin.symbol}
                                   name={coin.name}
                                   image={coin.image}
                                   price={coin.current_price}
                                   marketCap={coin.market_cap}
                                   priceChange={coin.price_change_percentage_24h}
                              />
                         ))}
                    </div>
               :
                   <Loader/> 
               }
              
              
          </>

     );
}

export default Landing;
