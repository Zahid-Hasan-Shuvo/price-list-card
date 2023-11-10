import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices]=useState([])

    useEffect(()=>{
    fetch('product.json')
    .then(res=>res.json())
    .then(data=>setPrices(data))
    },[])
    return (
        <div className='grid md:grid-cols-3 gap-6 mt-12'>
            {
                prices.map(price=> <PriceCard key={price.id} price={price}></PriceCard>)
            }
        </div>
    );
};

export default PriceList;