import Link from 'next/link';
import React from 'react';




const Jfooter = () => {
    return <div className='h-[150px] w-screen bg-blue-800'>
        <ul className=' flex flex-col justify-center items-center text-2xl text-white'>
            <li><Link href="contact">Contact</Link></li>
            <li>Address</li>
            <li>House</li>
            <li>Email</li>
        </ul>
    </div>;
}



export default Jfooter;