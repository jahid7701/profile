import React from 'react';
import { Data } from './Carddata';
import Card from './Card';
const Cardbox = () => {
    return <div className='h-[300px]  w-screen flex flex-row justify-center lg:justify-start  items-center flex-wrap'>

{ 
    Data.map((prop,index)=>(
    

<div key={index}>
<Card name={prop.name} proffesion={prop.proffesion}/>
</div>



    ))
}


    </div>;
}



export default Cardbox;