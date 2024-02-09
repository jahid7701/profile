import React from 'react';

const Card = (props) => {
    return <div className='h-[250px] lg:h-[250px] lg:w-[300px] w-[200px] bg-cyan-400 m-[20px] rounded-md  relative transform hover:translate-y-4 duration-700'>
        <div className='absolute border-[10px] border-white top-[-30px] right-[-30px] h-[80px] w-[90px] duration-500 transform hover:translate-x-4 '></div>
        <div className='text-center'>
            {props.name}
        </div>
        <div className='text-center'>{props.proffesion}</div>
    </div>;
}



export default Card;