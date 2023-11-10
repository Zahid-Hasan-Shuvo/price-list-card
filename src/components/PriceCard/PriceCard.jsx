import React from 'react';
import SingleFeature from '../SingleFeature/SingleFeature';

const PriceCard = ({price}) => {
    return (
        <div>
            <div className='bg-yellow-300 p-10 rounded-3xl py-16'>
            <div >
            <span className='text-5xl  text-red-700'>
                {price.price}
                
            </span>
            <span>/mon</span></div>
            <div>
            <span className='text-2xl  text-blue-700'>
            {price.name}
            </span>
            </div>
            <h2 className="text-blue-800 font-bold underline">Features</h2>
            {
                    price.features.map((feature, idx)=><SingleFeature key={idx} feature={feature}></SingleFeature>)
                }
            </div>
            
            <div>
               
            </div>
        </div>
    );
};

export default PriceCard;